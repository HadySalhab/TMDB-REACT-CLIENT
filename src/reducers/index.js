import { combineReducers } from "redux";
import paletteReducer from "./paletteReducer";
import newPaletteReducer from "./newPaletteReducer";
import movieReducer from "./movieReducer";
import moviesReducer from "./moviesReducer";
export default combineReducers({
	palettes: paletteReducer,
	movie: movieReducer,
	movies: moviesReducer,
	newPalette: newPaletteReducer,
});
