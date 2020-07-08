import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/styles";
import { connect } from "react-redux";
import { getPalettes } from "../../actions";
import styles from "../../style/Home";
import PaletteItem from "../palettes/PaletteItem";
const Home = ({ classes, palettes, getPalettes }) => {
	useEffect(() => {
		getPalettes();
	}, [getPalettes]);

	const renderNav = () => (
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
	);

	const renderPalettes = () => {
		if (palettes.length > 0) {
			return palettes.map((palette) => (
				<PaletteItem {...palette} key={palette.id} />
			));
		}
	};

	return (
		<div className={classes.root}>
			<div className={classes.container}>
				<div className={classes.content}>
					{renderNav()}
					{renderPalettes()}
				</div>
			</div>
		</div>
	);
};
const mapStateToProps = (state) => {
	return {
		palettes: state.palettes,
	};
};
const HomeWithStyles = withStyles(styles)(Home);
export default connect(mapStateToProps, { getPalettes })(HomeWithStyles);
