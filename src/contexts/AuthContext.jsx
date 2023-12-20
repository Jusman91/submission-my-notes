import { createContext, useMemo, useReducer } from 'react';
import { AuthReducer } from './reducer/authReducer';
import PropTypes from 'prop-types';
import { getUser } from '../utils/service/authService';

const INITIAL_STATE = {
	loading: false,
	error: null,
};

export const AuthContext = createContext(INITIAL_STATE);

const AuthContextProvider = ({ children }) => {
	const [state, dispatch] = useReducer(
		AuthReducer,
		INITIAL_STATE,
	);

	const value = useMemo(() => {
		return {
			user: getUser(),
			loading: state.loading,
			error: state.error,
			dispatch,
		};
	}, [state.error, state.loading]);

	return (
		<AuthContext.Provider value={value}>
			{children}
		</AuthContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
