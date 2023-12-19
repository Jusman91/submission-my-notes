import {
	FULFILLED,
	LOGOUT,
	PENDING,
	REJECTED,
} from '../../static/actionTypes';

export const AuthReducer = (state, action) => {
	switch (action.type) {
		case PENDING:
			return {
				...state,
				loading: true,
			};
		case FULFILLED: {
			return {
				...state,
				loading: false,
			};
		}
		case REJECTED:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case LOGOUT:
			return {
				...state,
				loading: false,
				error: null,
			};
		default:
			return state;
	}
};
