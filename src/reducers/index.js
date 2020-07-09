import { combineReducers } from "redux";
import paletteReducer from "./paletteReducer";
import dialogReducer from "./dialogReducer";
export default combineReducers({
	palettes: paletteReducer,
	dialog: dialogReducer,
});
