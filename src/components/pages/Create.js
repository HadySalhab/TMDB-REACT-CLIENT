import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IMAGE_W185 } from "../../data/Constants";
import Button from "@material-ui/core/Button";
import useStyles from "../../style/Create";
import Navbar from "../layout/Navbar";
import Likes from "../layout/Likes";
import MuiAlert from "@material-ui/lab/Alert";
import CircularProgress from "@material-ui/core/CircularProgress";
import Typography from "@material-ui/core/Typography";
import MovieListItem from "../movies/MovieListItem";
import Snackbar from "../layout/Snackbar";
import useDialog from "../../hooks/useDialog";
import {
	searchMovies,
	addMovie,
	showAlertMovies,
	removeAlertMovies,
} from "../../actions";
import { connect } from "react-redux";
import SearchIcon from "@material-ui/icons/Search";
import { getPalettes } from "../../actions";
import MovieCard from "../movies/MovieCard";
import SavePaletteDialog from "../layout/SavePaletteDialog";

const Create = (props) => {
	const classes = useStyles();
	const [input, setInput] = useState("");
	const { movies, loading, alert } = props.movies;
	const { newPalette, palettes, getPalettes } = props;
	const { isOpen, hideDialog, showDialog } = useDialog();

	useEffect(() => {
		getPalettes();
	}, [getPalettes]);

	const renderMovies = () => {
		const results = Object.keys(movies).map((i) => movies[i]);
		return results.map((movie) => (
			<MovieCard
				key={movie.id}
				title={movie.title.replace(/ *\([^)]*\) */g, "")}
				image={IMAGE_W185 + movie.poster_path}
				actions={
					<Button
						size="large"
						color="primary"
						classes={{
							root: classes.cardBtn,
						}}
						onClick={() => {
							if (newPalette.movies.length >= 20) {
								props.showAlertMovies({
									type: "info",
									message: "Max number of movies reached: 20/20",
								});
								return;
							}
							if (props.newPalette.movies.find((el) => el.id === movie.id)) {
								props.showAlertMovies({
									type: "info",
									message: "Can't add duplicate movie",
								});
								return;
							}

							props.addMovie(movie);
							props.showAlertMovies({
								type: "success",
								message: `movie added: ${newPalette.movies.length + 1}/20`,
							});
						}}
					>
						Add To Palette
					</Button>
				}
				onMovieClick={() => {
					props.history.push(`/movies/${movie.id}`);
				}}
			/>
		));
	};
	const renderLoading = () => {
		return (
			<div className={classes.progress}>
				<CircularProgress
					classes={{
						svg: classes.circularProgress,
					}}
				/>
			</div>
		);
	};
	const renderFooter = () => {
		return (
			<footer className={classes.footer}>
				<Button
					disabled={newPalette.movies.length === 0 ? true : false}
					className={classes.save}
					variant="contained"
					color="secondary"
					onClick={() => {
						showDialog();
					}}
				>
					Save Palette
				</Button>
			</footer>
		);
	};

	const renderAlert = () => (
		<Snackbar
			open={alert ? true : false}
			onClose={() => {
				props.removeAlertMovies();
			}}
			onClick={() => {
				props.removeAlertMovies();
			}}
			onEntered={() => {
				setTimeout(() => {
					props.removeAlertMovies();
				}, 1500);
			}}
		>
			<MuiAlert
				classes={{
					root: classes.alert,
					message: classes.alertMessage,
				}}
				elevation={6}
				variant="filled"
				severity={alert.type}
			>
				{alert.message}
			</MuiAlert>
		</Snackbar>
	);
	const renderNewPaletteItems = () => {
		if (newPalette.movies.length === 0) {
			return (
				<Typography className={classes.typography}>No Movie Added!</Typography>
			);
		} else {
			return <MovieListItem movies={newPalette.movies} />;
		}
	};

	return (
		<div className={classes.root}>
			<SavePaletteDialog
				isOpen={isOpen}
				hideDialog={hideDialog}
				palettes={palettes}
				movies={newPalette.movies}
				history={props.history}
			/>
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
				<form
					className={classes.search}
					onSubmit={(e) => {
						e.preventDefault();
						if (input === "") {
							return;
						}
						props.searchMovies(input);
						setInput("");
					}}
				>
					<input
						value={input}
						type="text"
						className={classes.search__input}
						placeholder="Harry Potter..."
						onChange={(e) => {
							setInput(e.target.value);
						}}
					/>
					<button className={classes.search__button}>
						<SearchIcon style={{ backgroundColor: "transparent" }} />
					</button>
				</form>
				<Likes>{renderNewPaletteItems()}</Likes>
			</Navbar>
			<div>
				{loading && renderLoading()}
				{alert && renderAlert()}
				<div className={classes.movies}>
					<div className={classes.drawerHead}></div>
					{movies && renderMovies()}
				</div>
			</div>
			{renderFooter()}
		</div>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		movies: state.movies,
		newPalette: state.newPalette,
		palettes: state.palettes,
	};
};

export default connect(mapStateToProps, {
	searchMovies,
	addMovie,
	showAlertMovies,
	removeAlertMovies,
	getPalettes,
})(Create);
