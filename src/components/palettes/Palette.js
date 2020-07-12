import React, { useEffect, useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { withStyles } from "@material-ui/styles";
import useSnack from "../../hooks/useSnack";
import { IMAGE_W185 } from "../../data/Constants";
import Button from "@material-ui/core/Button";
import styles from "../../style/Palette";
import Navbar from "../layout/Navbar";
import Spinner from "../layout/Spinner";
import MSnackbar from "../layout/Snackbar";
import { getPalettes } from "../../actions";
import { connect } from "react-redux";
import { sortMoviesBy } from "../../util/sortMoviesBy";
import MovieCard from "../movies/MovieCard";

const Palette = (props) => {
	const { classes, getPalettes, palette } = props;
	const [sort, setSort] = useState("Original");
	const { isOpen, showSnack, hideSnack } = useSnack(false);

	useEffect(() => {
		getPalettes(); //Router Components should Stand Alone
	}, [getPalettes]);

	const onSortChange = (value) => {
		setSort(value);
		showSnack();
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
					onMovieClick={() => {
						props.history.push(`/movies/${movie.id}`);
					}}
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

	if (palette === "Not Found") {
		return <Redirect to="/" />;
	}

	return (
		<div className={classes.root}>
			<Navbar>
				<Link to="/">
					<Button
						className={classes.logo}
						variant="contained"
						color="secondary"
					>
						Movie Palettes
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

			<MSnackbar
				msgComp={
					<span id="message-id" className={classes.message}>
						Updated: {sort}
					</span>
				}
				duration={3000}
				open={isOpen}
				onClose={hideSnack}
				onClick={hideSnack}
			/>
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	const palette = state.palettes.find(
		(el) => el.id === ownProps.match.params.id
	);
	return {
		palette: palette === undefined ? "Not Found" : palette,
	};
};
const StyledPalette = withStyles(styles)(Palette);
export default connect(mapStateToProps, { getPalettes })(StyledPalette);
