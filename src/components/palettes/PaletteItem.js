import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
import styles from "../../style/PaletteItem";
import useDialog from "../../hooks/useDialog";
import DeleteDialog from "../layout/AvatarDialog";
import { IMAGE_W185 } from "../../data/Constants";
import { connect } from "react-redux";
import { deletePalette } from "../../actions";

const PaletteItem = ({
	classes,
	paletteName,
	emoji,
	movies,
	onItemClick,
	deletePalette,
	id,
}) => {
	const { isOpen, showDialog, hideDialog } = useDialog();
	const renderMovies = () => {
		return movies.map((movie) => {
			return (
				<div
					key={movie.id}
					className={classes.miniMovie}
					style={{
						background: `url(${
							IMAGE_W185 + movie.poster_path
						}) center top/cover no-repeat`,
					}}
				></div>
			);
		});
	};

	return (
		<div className={classes.root}>
			<div
				className={classes.movies}
				onClick={() => {
					onItemClick(id);
				}}
			>
				{renderMovies()}
			</div>
			<div className={classes.text}>
				<h5 className={classes.title}>
					{paletteName}
					<span className={classes.emojis}>
						<span className={classes.emoji}>{emoji}</span>
						<DeleteIcon onClick={showDialog} className={classes.deleteIcon} />
					</span>
				</h5>
			</div>
			<DeleteDialog
				isOpen={isOpen}
				onClose={hideDialog}
				title="Delete This Palette?"
				confirmTxt="Delete"
				declineTxt="cancel"
				onConfirm={() => {
					deletePalette(id);
					hideDialog();
				}}
				onDecline={hideDialog}
			/>
		</div>
	);
};

const StyledPaletteItem = withStyles(styles)(PaletteItem);
export default connect(null, { deletePalette })(StyledPaletteItem);
