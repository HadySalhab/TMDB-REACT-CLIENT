import React from "react";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItem from "@material-ui/core/ListItem";

const AvatarItem = ({ onItemClick, style, text, component }) => {
	return (
		<ListItem button onClick={onItemClick}>
			<ListItemAvatar>
				<Avatar style={style}>{component}</Avatar>
			</ListItemAvatar>
			<ListItemText primary={text} />
		</ListItem>
	);
};

export default AvatarItem;
