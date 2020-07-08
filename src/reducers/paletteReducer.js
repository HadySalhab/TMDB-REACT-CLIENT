import { GET_PALETTES } from "../actions/types";
export default (state = [], action) => {
	switch (action.type) {
		case GET_PALETTES:
			return [...state, ...action.payload];
		default:
			return state;
	}
};
