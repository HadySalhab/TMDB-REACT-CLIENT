import React from "react";
import Dialog from "@material-ui/core/Dialog";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import CheckIcon from "@material-ui/icons/Check";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import blue from "@material-ui/core/colors/blue";
import red from "@material-ui/core/colors/red";
import { closeDialog } from "../../actions";
import { connect } from "react-redux";

//TODO, PASS CONFIRM,CANCEL ACTION FROM PARENT
const AvatarDialog = ({ deletePalette, closeDialog, isOpen }) => {
	return (
		<Dialog
			open={isOpen}
			aria-labelledby="delete-dialog-title"
			onClose={closeDialog}
		>
			<DialogTitle id="delete-dialog-title">Delete This Palette?</DialogTitle>
			<List>
				<ListItem button onClick={deletePalette}>
					<ListItemAvatar>
						<Avatar
							style={{
								backgroundColor: blue[100],
								color: blue[600],
							}}
						>
							<CheckIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Delete" />
				</ListItem>
				<ListItem button onClick={closeDialog}>
					<ListItemAvatar>
						<Avatar
							style={{
								backgroundColor: red[100],
								color: red[600],
							}}
						>
							<CloseIcon />
						</Avatar>
					</ListItemAvatar>
					<ListItemText primary="Cancel" />
				</ListItem>
			</List>
		</Dialog>
	);
};
const mapStateToProps = (state) => {
	return {
		isOpen: state.dialog,
	};
};
export default connect(mapStateToProps, { closeDialog })(AvatarDialog);
