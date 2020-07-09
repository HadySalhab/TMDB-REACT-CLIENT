import React from "react";
import styles from "../../style/Navbar";
import { withStyles } from "@material-ui/styles";
const Navbar = (props) => {
	return <nav className={props.classes.nav}>{props.children}</nav>;
};

export default withStyles(styles)(Navbar);
