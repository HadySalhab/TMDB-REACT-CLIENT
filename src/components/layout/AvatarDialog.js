import React from "react";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import DialogTitle from "@material-ui/core/DialogTitle";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import AvatarItem from "./AvatarItem";

const AvatarDialog = ({
	isOpen,
	onClose,
	title,
	confirmTxt,
	declineTxt,
	onConfirm,
	onDecline,
}) => {
	return (
		<Dialog
			open={isOpen}
			aria-labelledby="delete-dialog-title"
			onClose={onClose}
		>
			<DialogTitle id="delete-dialog-title">{title}</DialogTitle>
			<List>
				<AvatarItem
					onItemClick={onConfirm}
					style={{
						backgroundColor: red[100],
						color: red[600],
					}}
					text={confirmTxt}
					component={<CheckIcon />}
				/>
				<AvatarItem
					onItemClick={onDecline}
					style={{
						backgroundColor: blue[100],
						color: blue[600],
					}}
					text={declineTxt}
					component={<CloseIcon />}
				/>
			</List>
		</Dialog>
	);
};

export default AvatarDialog;
