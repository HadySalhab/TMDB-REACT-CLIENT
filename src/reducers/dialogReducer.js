import { OPEN_DIALOG, CLOSE_DIALOG } from "../actions/types";
export default (state = false, action) => {
	switch (action.type) {
		case OPEN_DIALOG:
			return true;
		case CLOSE_DIALOG:
			return false;
		default:
			return state;
	}
};
