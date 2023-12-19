import { createContext, useReducer } from 'react';
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

	return (
		<AuthContext.Provider
			value={{
				user: getUser(),
				loading: state.loading,
				error: state.error,
				dispatch,
			}}>
			{children}
		</AuthContext.Provider>
	);
};

AuthContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default AuthContextProvider;
