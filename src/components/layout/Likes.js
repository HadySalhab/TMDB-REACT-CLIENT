import React from "react";

import Popover from "@material-ui/core/Popover";

import Button from "@material-ui/core/Button";

import useStyles from "../../style/Likes";

const Likes = (props) => {
	//useStyles is a styling hook
	const classes = useStyles();
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? "simple-popover" : undefined;

	return (
		<div>
			<Button
				aria-describedby={id}
				className={classes.popup}
				variant="contained"
				color="secondary"
				onClick={handleClick}
			>
				Your Palette
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: "bottom",
					horizontal: "center",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "center",
				}}
			>
				{props.children}
			</Popover>
		</div>
	);
};

export default Likes;
//withStyle () high-order component
