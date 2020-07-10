import React, { useEffect, Fragment } from "react";
import { withStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";
import Navbar from "../layout/Navbar";
import MovieHeader from "./MovieHeader";
import CircularProgress from "@material-ui/core/CircularProgress";
import styles from "../../style/Movie";
import Casts from "./Casts";
import Reviews from "./Reviews";
import Trailers from "./Trailers";
import Alert from "@material-ui/lab/Alert";
import { connect } from "react-redux";
import { getMovie, resetMovie } from "../../actions";

const Movie = (props) => {
	const { getMovie, resetMovie } = props;
	const id = props.match.params.movieId;
	useEffect(() => {
		getMovie(id);
		return () => {
			resetMovie();
		};
	}, [id, getMovie]);
	const { classes } = props;
	const { movie, loading, alert } = props.movie;
	const renderLoading = () => {
		return (
			<div className={classes.progress}>
				<CircularProgress
					classes={{
						root: classes.circularProgress,
					}}
				/>
			</div>
		);
	};
	const getCastWithImg = () => {
		const castArr = movie.credits.cast;
		const castArrWithImage = castArr.filter((cast) => {
			return cast.profile_path !== null;
		});
		return castArrWithImage.slice(0, 10);
	};

	const renderDetail = () => {
		return (
			<div className={classes.root}>
				<Navbar>
					<Button
						className={classes.logo}
						variant="contained"
						color="secondary"
						onClick={() => props.history.goBack()}
					>
						Back
					</Button>
				</Navbar>
				<MovieHeader detail={movie} />
				<div>
					<div className={classes.container}>
						{getCastWithImg().length > 0 && <Casts casts={getCastWithImg()} />}

						{movie.videos.results.length > 0 && <Trailers movie={movie} />}

						{movie.reviews.results.length > 0 && <Reviews movie={movie} />}
					</div>
				</div>
				<footer className={classes.footer}>
					Created By: Hadi Salheb ,&nbsp;
					<a
						className={classes.tmdb}
						href="https://www.themoviedb.org/"
						rel="noopener noreferrer"
						target="_blank"
					>
						{" "}
						Credit to TMDB Api.
					</a>
				</footer>
			</div>
		);
	};
	const renderAlert = () => {
		if (alert) {
			return (
				<Alert
					classes={{
						root: classes.alert,
						message: classes.alertMessage,
					}}
					severity={alert.type}
				>
					{alert.message}
				</Alert>
			);
		}
	};

	return (
		<Fragment>
			{loading && renderLoading()}
			{movie && renderDetail()}
			{alert && renderAlert()}
		</Fragment>
	);
};
const mapStateToProps = (state, ownProps) => {
	return {
		movie: state.movie,
	};
};
const StyledMovie = withStyles(styles)(Movie);
export default connect(mapStateToProps, { getMovie, resetMovie })(StyledMovie);
