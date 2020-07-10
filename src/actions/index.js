import {
	GET_PALETTES,
	DELETE_PALETTES,
	GET_MOVIE,
	LOADING_MOVIE,
	ERROR_MOVIE,
	RESET_MOVIE,
} from "./types";
import _ from "lodash";
import seedMovies from "../data/seedMovies";
import TmdbClient from "../api/TmdbClient";
const tmdb = new TmdbClient();
export const getPalettes = () => {
	let palettes;
	if (window.localStorage.getItem("palettes")) {
		palettes = JSON.parse(window.localStorage.getItem("palettes"));
	} else {
		palettes = seedMovies;
		window.localStorage.setItem("palettes", JSON.stringify(palettes));
	}
	return {
		type: GET_PALETTES,
		payload: palettes,
	};
};

export const deletePalette = (paletteId) => {
	let palettes = JSON.parse(window.localStorage.getItem("palettes"));
	palettes = palettes.filter((el) => el.id !== paletteId);
	window.localStorage.setItem("palettes", JSON.stringify(palettes));
	return {
		type: DELETE_PALETTES,
		payload: palettes,
	};
};

export const getMovie = (movieId) => async (dispatch) => {
	try {
		dispatch({
			type: LOADING_MOVIE,
		});
		const movie = await tmdb.getMovie(movieId);
		if (_.isEmpty(movie)) {
			dispatch({
				type: GET_MOVIE,
				payload: {
					movie,
					alert: {
						type: "info",
						message: `Can't find your request`,
					},
				},
			});
		}
		dispatch({
			type: GET_MOVIE,
			payload: {
				movie,
				alert: null,
			},
		});
	} catch (err) {
		if (err.response) {
			dispatch({
				type: ERROR_MOVIE,
				payload: {
					type: "error",
					message: err.response.data.status_message,
				},
			});
		} else {
			dispatch({
				type: ERROR_MOVIE,
				payload: {
					type: "error",
					message: "Check network connection",
				},
			});
		}
	}
};
export const resetMovie = () => {
	return {
		type: RESET_MOVIE,
	};
};
