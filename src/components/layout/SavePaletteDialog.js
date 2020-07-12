import React, { Fragment, useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { useForm } from "react-hook-form";
import useStyles from "../../style/SavePaletteDialog";
import "emoji-mart/css/emoji-mart.css";
import { Picker } from "emoji-mart";
import { addNewPalette, resetMovies, resetNewPalette } from "../../actions";
import { connect } from "react-redux";
import slugify from "slugify";

function SavePaletteDialog(props) {
	const { palettes, movies, isOpen, hideDialog, history } = props;

	const { clearErrors, trigger, register, errors } = useForm();
	const [input, setInput] = React.useState("");
	const [content, setContent] = useState("form");
	const classes = useStyles();

	const isPaletteNameUnique = () => {
		return !palettes.some((p) => {
			return p.paletteName === input;
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const result = await trigger("paletteNameInput");
		if (result) {
			setContent("emoji");
		} else {
			setTimeout(() => {
				clearErrors();
			}, 2000);
		}
	};

	const savePalette = (emoji) => {
		const createdPalette = {
			paletteName: input,
			emoji: emoji.native,
			movies,
			id: slugify(input, { lower: true }),
		};
		props.addNewPalette(createdPalette);
		props.resetNewPalette();
		props.resetMovies();
		history.push("/");
	};

	return (
		<Dialog
			open={isOpen}
			onClose={() => {
				hideDialog();
				setInput("");
				setContent("form");
			}}
			aria-labelledby="form-dialog-title"
		>
			{content === "form" ? (
				<Fragment>
					<DialogTitle
						disableTypography={true}
						className={classes.title}
						id="form-dialog-title"
					>
						Choose Palette Name
					</DialogTitle>
					<form onSubmit={handleSubmit} className={classes.form}>
						<DialogContent>
							<DialogContentText className={classes.dialogText}>
								Please enter a name for your new beautiful palette. Make sure
								it's unique
							</DialogContentText>

							<input
								className={classes.input}
								value={input}
								onChange={(e) => setInput(e.target.value)}
								name="paletteNameInput"
								ref={register({
									required: true,
									validate: isPaletteNameUnique,
								})}
							/>
							{errors.paletteNameInput?.type === "required" && (
								<span className={classes.formError}>
									This field is required
								</span>
							)}
							{errors.paletteNameInput?.type === "validate" && (
								<span className={classes.formError}>Palette Name Taken</span>
							)}
						</DialogContent>

						<DialogActions>
							<Button onClick={hideDialog} color="primary">
								Cancel
							</Button>
							<Button type="submit" variant="contained" color="secondary">
								Save
							</Button>
						</DialogActions>
					</form>
				</Fragment>
			) : (
				<Picker onSelect={savePalette} />
			)}
		</Dialog>
	);
}

export default connect(null, { addNewPalette, resetNewPalette, resetMovies })(
	SavePaletteDialog
);
