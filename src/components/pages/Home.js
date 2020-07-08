import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import styles from "../../style/Home";
import PaletteItem from "../palettes/PaletteItem";
const Home = ({ classes }) => {
	const palettes = [1, 2];
	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.content}>
					<nav className={classes.nav}>
						<h1>Movies Palette List</h1>
						<Link to="/palette/new">
							<Button
								className={classes.create}
								variant="contained"
								color="secondary"
							>
								Create Palette
							</Button>
						</Link>
					</nav>

					{palettes.map((palette) => (
						<PaletteItem {...palette} key={palette.id} />
					))}
				</div>
			</div>
		</div>
	);
};

export default withStyles(styles)(Home);
