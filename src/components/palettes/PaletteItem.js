import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import { withStyles } from "@material-ui/styles";
import styles from "../../style/PaletteItem";
import useDialog from "../../hooks/useDialog";
import DeleteDialog from "../layout/AvatarDialog";

const PaletteItem = ({
	classes,
	paletteName,
	emoji,
	movies,
	onItemClick,
	id,
}) => {
	const { isOpen, showDialog, hideDialog } = useDialog();
	const deletePalette = () => {};

	return (
		<div className={classes.root}>
			<div
				className={classes.movies}
				onClick={() => {
					onItemClick(id);
				}}
			>
				{/* {renderMovies()} */}
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
				onConfirm={hideDialog}
				onDecline={hideDialog}
			/>
		</div>
	);
};

export default withStyles(styles)(PaletteItem);
