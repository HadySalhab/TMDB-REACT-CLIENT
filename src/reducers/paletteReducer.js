import {
	GET_PALETTES,
	DELETE_PALETTES,
	ADD_NEW_PALETTE,
} from "../actions/types";
export default (state = [], action) => {
	switch (action.type) {
		case GET_PALETTES:
			return [...action.payload];
		case DELETE_PALETTES:
			return [...action.payload];
		case ADD_NEW_PALETTE:
			return [...action.payload];
		default:
			return state;
	}
};
