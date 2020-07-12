import {
	GET_PALETTES,
	DELETE_PALETTES,
	GET_MOVIE,
	SEARCH_MOVIES,
	RESET_MOVIE,
	RESET_MOVIES,
	LOADING_MOVIE,
	LOADING_MOVIES,
	REMOVE_ALERT_MOVIES,
	ALERT_MOVIE,
	ALERT_MOVIES,
	ADD_MOVIE,
	ADD_NEW_PALETTE,
	REMOVE_MOVIE,
	RESET_NEW_PALETTE,
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
				type: ALERT_MOVIE,
				payload: {
					type: "info",
					message: `Can't find your request`,
				},
			});
		} else {
			dispatch({
				type: GET_MOVIE,
				payload: {
					...movie,
				},
			});
		}
	} catch (err) {
		if (err.response) {
			dispatch({
				type: ALERT_MOVIE,
				payload: {
					type: "error",
					message: err.response.data.status_message,
				},
			});
		} else {
			dispatch({
				type: ALERT_MOVIE,
				payload: {
					type: "error",
					message: "Check network connection",
				},
			});
		}
	}
};
export const searchMovies = (query) => async (dispatch) => {
	try {
		dispatch({
			type: LOADING_MOVIES,
		});
		const response = await tmdb.searchMovies(query);
		const movies = response.results;
		if (movies.length === 0) {
			dispatch({
				type: ALERT_MOVIES,
				payload: {
					type: "info",
					message: `Can't find your request`,
				},
			});
		} else {
			dispatch({
				type: SEARCH_MOVIES,
				payload: {
					...movies,
				},
			});
		}
	} catch (err) {
		if (err.response) {
			dispatch({
				type: ALERT_MOVIES,
				payload: {
					type: "error",
					message: err.response.data.status_message,
				},
			});
		} else {
			dispatch({
				type: ALERT_MOVIES,
				payload: {
					type: "error",
					message: "Check network connection",
				},
			});
		}
	}
};
export const addMovie = (movie) => {
	return {
		type: ADD_MOVIE,
		payload: movie,
	};
};
export const removeMovie = (movie) => {
	return {
		type: REMOVE_MOVIE,
		payload: movie,
	};
};
export const resetMovie = () => {
	return {
		type: RESET_MOVIE,
	};
};
export const resetMovies = () => {
	return {
		type: RESET_MOVIES,
	};
};
export const resetNewPalette = () => {
	return {
		type: RESET_NEW_PALETTE,
	};
};
export const showAlertMovies = (alert) => {
	return {
		type: ALERT_MOVIES,
		payload: alert,
	};
};

export const removeAlertMovies = () => {
	return {
		type: REMOVE_ALERT_MOVIES,
	};
};

export const addNewPalette = (newPalette) => {
	let palettes = JSON.parse(window.localStorage.getItem("palettes"));
	palettes = [...palettes, newPalette];
	window.localStorage.setItem("palettes", JSON.stringify(palettes));
	return {
		type: ADD_NEW_PALETTE,
		payload: palettes,
	};
};
