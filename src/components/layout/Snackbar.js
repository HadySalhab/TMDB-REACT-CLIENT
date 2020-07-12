import React from "react";
import Snackbar from "@material-ui/core/Snackbar";
import CloseIcon from "@material-ui/icons/Close";
import IconButton from "@material-ui/core/IconButton";

const MSnackbar = (props) => {
	const { open, duration, msgComp, onClose, onClick, onEntered } = props;
	return (
		<Snackbar
			anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
			open={open}
			autoHideDuration={duration}
			message={msgComp}
			onEntered={onEntered}
			ContentProps={{
				"aria-describedby": "message-id",
			}}
			onClose={onClose}
			action={[
				<IconButton
					onClick={onClick}
					color="inherit"
					key="close"
					aria-label="close"
				>
					<CloseIcon />
				</IconButton>,
			]}
		>
			{props.children}
		</Snackbar>
	);
};

export default MSnackbar;
