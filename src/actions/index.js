import { GET_PALETTES, DELETE_PALETTES } from "./types";
import seedMovies from "../data/seedMovies";
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
