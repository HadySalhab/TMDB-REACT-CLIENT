import { GET_PALETTES, OPEN_DIALOG, CLOSE_DIALOG } from "./types";
import seedMovies from "../data/seedMovies";
export const getPalettes = () => {
	let palettes;
	if (window.localStorage.getItem("palettes")) {
		palettes = JSON.parse(window.localStorage.getItem("palettes"));
	} else {
		palettes = seedMovies;
	}
	return {
		type: GET_PALETTES,
		payload: palettes,
	};
};
export const openDialog = () => {
	return {
		type: OPEN_DIALOG,
	};
};
export const closeDialog = () => {
	return {
		type: CLOSE_DIALOG,
	};
};
