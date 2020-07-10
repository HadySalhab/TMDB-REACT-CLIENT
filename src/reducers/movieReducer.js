import {
	GET_MOVIE,
	LOADING_MOVIE,
	ERROR_MOVIE,
	REMOVE_ALERT,
	RESET_MOVIE,
} from "../actions/types";

const movieState = {
	movie: null,
	loading: false,
	alert: null,
};
export default (state = movieState, action) => {
	switch (action.type) {
		case GET_MOVIE:
			return {
				...state,
				movie: action.payload.movie,
				loading: false,
				alert: action.payload.alert, //IF MOVIE IS EMPTY
			};
		case LOADING_MOVIE:
			return { ...state, loading: true, alert: null };
		case ERROR_MOVIE:
			return { ...state, loading: false, alert: action.payload };
		case REMOVE_ALERT:
			return { ...state, alert: null };
		case RESET_MOVIE:
			return {
				...state,
				movie: null,
				loading: false,
				alert: null,
			};
		default:
			return state;
	}
};
