import { ADD_MOVIE, REMOVE_MOVIE, RESET_NEW_PALETTE } from "../actions/types";

const initial = {
	paletteName: "",
	id: "",
	emoji: "",
	movies: [],
};

export default (state = initial, action) => {
	switch (action.type) {
		case ADD_MOVIE:
			return { ...state, movies: [...state.movies, action.payload] };
		case REMOVE_MOVIE:
			return {
				...state,
				movies: state.movies.filter((el) => el.id !== action.payload.id),
			};
		case RESET_NEW_PALETTE:
			return {
				...state,
				paletteName: "",
				id: "",
				emoji: "",
				movies: [],
			};
		default:
			return state;
	}
};
