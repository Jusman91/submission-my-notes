import {
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
			};
		case FULFILLED_USER: {
			return {
				...state,
				loading: false,
			};
		}
		case REJECTED_USER:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};
