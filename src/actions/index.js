import { GET_PALETTES } from "./types";
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
