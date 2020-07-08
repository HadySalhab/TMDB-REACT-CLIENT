import { GET_PALETTES } from "./types";
import seedMovies from "../data/seedMovies";
export const getPalettes = () => {
	let palettes;
	try {
		palettes = JSON.parse(window.localStorage.getItem("palettes"));
	} catch (e) {
		palettes = seedMovies;
	}
	return {
		type: GET_PALETTES,
		payload: palettes,
	};
};
