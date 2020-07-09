import React, { useState } from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import AvatarDialog from "../layout/AvatarDialog";
import { withStyles } from "@material-ui/styles";
import styles from "../../style/PaletteItem";
import { openDialog } from "../../actions";
import { connect } from "react-redux";

const PaletteItem = ({ classes, paletteName, emoji, movies, openDialog }) => {
	const onMiniPaletteClicked = (event) => {};
	const deletePalette = () => {};

	return (
		<div className={classes.root}>
			<div className={classes.movies} onClick={onMiniPaletteClicked}>
				{/* {renderMovies()} */}
			</div>
			<div className={classes.text}>
				<h5 className={classes.title}>
					{paletteName}
					<span className={classes.emojis}>
						<span className={classes.emoji}>{emoji}</span>
						<DeleteIcon onClick={openDialog} className={classes.deleteIcon} />
					</span>
				</h5>
			</div>
			<AvatarDialog />
		</div>
	);
};

const StyledPaletteItem = withStyles(styles)(PaletteItem);
export default connect(null, { openDialog })(StyledPaletteItem);
