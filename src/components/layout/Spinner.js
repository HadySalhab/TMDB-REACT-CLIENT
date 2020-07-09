import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import { withStyles } from "@material-ui/styles";
import styles from "../../style/Spinner";
const Spinner = ({ value, onChange, items, classes }) => {
	return (
		<Select
			classes={{
				root: classes.selectRoot,
				iconFilled: classes.iconFilled,
			}}
			variant="filled"
			value={value}
			onChange={(e) => onChange(e.target.value)}
		>
			{items.map((el) => (
				<MenuItem key={el} value={el}>
					{el}
				</MenuItem>
			))}
		</Select>
	);
};

export default withStyles(styles)(Spinner);
