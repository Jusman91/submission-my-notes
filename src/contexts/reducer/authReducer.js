import {
	CLEAR_ERROR,
	FULFILLED_USER,
	PENDING_USER,
	REJECTED_USER,
} from '../../static/actionTypes';

export const AuthReducer = (state, action) => {
	switch (action.type) {
		case PENDING_USER:
			return {
				...state,
				loading: true,
				error: null,
			};
		case FULFILLED_USER: {
			return {
				...state,
				loading: false,
				error: null,
			};
		}
		case REJECTED_USER:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case CLEAR_ERROR:
			return {
				...state,
				error: null,
			};
		default:
			return state;
	}
};
