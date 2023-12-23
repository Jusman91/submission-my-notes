import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../../hooks/useContext';

const AuthFormSwitch = ({ login }) => {
	const { clearError } = useAuthContext();
	return (
		<div className='flex items-center justify-center gap-1 mt-4'>
			<small>
				{login
					? 'not registered?'
					: 'already have an account?'}
			</small>
			<Link
				to={login ? '/auth/register' : '/auth/login'}
				className='text-sm text-primary-2 font-semibold hover:text-secondary-1 duration-300'
				onClick={clearError}>
				{login ? 'Register' : 'Login'}
			</Link>
		</div>
	);
};

AuthFormSwitch.propTypes = {
	login: PropTypes.bool,
};

export default AuthFormSwitch;
