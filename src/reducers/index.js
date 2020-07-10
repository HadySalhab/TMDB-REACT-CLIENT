import { combineReducers } from "redux";
import paletteReducer from "./paletteReducer";
import movieReducer from "./movieReducer";
export default combineReducers({
	palettes: paletteReducer,
	movie: movieReducer,
});
