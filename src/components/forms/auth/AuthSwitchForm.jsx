import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const AuthSwitchForm = ({ login }) => {
	return (
		<div className='flex items-center justify-center gap-1 mt-4'>
			<small>
				{login
					? 'not registered?'
					: 'already have an account?'}
			</small>
			<Link
				to={login ? '/auth/register' : '/auth/login'}
				className='text-xs font-semibold hover:text-secondary-600 duration-300'>
				{login ? 'Register' : 'Login'}
			</Link>
		</div>
	);
};

AuthSwitchForm.propTypes = {
	login: PropTypes.bool,
};

export default AuthSwitchForm;
