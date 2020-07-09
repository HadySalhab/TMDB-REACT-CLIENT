import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import { IMAGE_W185 } from "../../data/Constants";
import Button from "@material-ui/core/Button";
import styles from "../../style/Palette";
import Navbar from "../layout/Navbar";
import Spinner from "../layout/Spinner";
import { getPalettes } from "../../actions";
import { connect } from "react-redux";
import { sortMoviesBy } from "../../util/sortMoviesBy";
import MovieCard from "../movies/MovieCard";

const Palette = (props) => {
	const { classes, getPalettes } = props;
	const [sort, setSort] = useState("Original");

	useEffect(() => {
		getPalettes(); //Router Components should Stand Alone
	}, [getPalettes]);

	const onSortChange = (value) => {
		setSort(value);
	};

	const renderMovies = () => {
		if (props.palette) {
			let movies = props.palette.movies;
			movies = sortMoviesBy(sort, movies);

			return movies.map((movie) => (
				<MovieCard
					key={movie.id}
					title={movie.title.replace(/ *\([^)]*\) */g, "")}
					image={IMAGE_W185 + movie.poster_path}
				/>
			));
		}
	};
	const renderFooter = () => {
		if (props.palette) {
			return (
				<footer className={classes.footer}>
					{props.palette.paletteName}
					<span className={classes.footerEmoji}>{props.palette.emoji}</span>
				</footer>
			);
		}
	};

	return (
		<div className={classes.root}>
			<Navbar>
				<Link to="/">
					<Button
						className={classes.logo}
						variant="contained"
						color="secondary"
					>
						Movie Palette
					</Button>
				</Link>
				<Spinner
					value={sort}
					onChange={onSortChange}
					items={["Original", "By Popularity", "By Vote", "By Date", "By Name"]}
				/>
			</Navbar>
			<div>
				<div className={classes.movies}>
					<div className={classes.drawerHead}></div>
					{renderMovies()}
				</div>
			</div>
			{renderFooter()}

			{/* <SnackbarMUI
				sortBy={sortBy}
				isSnackbarOpen={isSnackBarOpen}
				closeSnackbar={closeSnackBar}
			/> */}
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		palette: state.palettes.find((el) => el.id === ownProps.match.params.id),
	};
};
const StyledPalette = withStyles(styles)(Palette);
export default connect(mapStateToProps, { getPalettes })(StyledPalette);
