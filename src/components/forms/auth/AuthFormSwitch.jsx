import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
	useAuthContext,
	useLanguageContext,
} from '../../../hooks/useContext';

const AuthFormSwitch = ({ login }) => {
	const { clearError } = useAuthContext();
	const { language } = useLanguageContext();
	const textLogin =
		language === 'id'
			? 'Belum punya akun?'
			: 'not registered?';
	const textRegister =
		language === 'id'
			? 'Sudah punya akun?'
			: 'already have an account?';
	const goToLogin =
		language === 'id' ? 'Gabung di sini' : 'Login?';
	const goToRegister =
		language === 'id' ? 'Daftar di sini' : 'Register';

	return (
		<div className='flex items-center justify-center gap-1 mt-4'>
			<small>{login ? textLogin : textRegister}</small>
			<Link
				to={login ? '/auth/register' : '/auth/login'}
				className='text-sm text-primary-2 font-semibold hover:text-secondary-1 duration-300'
				onClick={clearError}>
				{login ? goToRegister : goToLogin}
			</Link>
		</div>
	);
};

AuthFormSwitch.propTypes = {
	login: PropTypes.bool,
};

export default AuthFormSwitch;
