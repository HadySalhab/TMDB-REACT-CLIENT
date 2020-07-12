import {
	SEARCH_MOVIES,
	LOADING_MOVIES,
	ALERT_MOVIES,
	REMOVE_ALERT_MOVIES,
	RESET_MOVIES,
} from "../actions/types";

const moviesState = {
	movies: [],
	loading: false,
	alert: null,
};
export default (state = moviesState, action) => {
	switch (action.type) {
		case SEARCH_MOVIES:
			return {
				...state,
				movies: action.payload,
				loading: false,
				alert: null,
			};
		case LOADING_MOVIES:
			return { ...state, loading: true, alert: null };
		case ALERT_MOVIES:
			return { ...state, loading: false, alert: action.payload };
		case REMOVE_ALERT_MOVIES:
			return { ...state, alert: null };
		case RESET_MOVIES:
			return {
				...state,
				movies: null,
				loading: false,
				alert: null,
			};
		default:
			return state;
	}
};
