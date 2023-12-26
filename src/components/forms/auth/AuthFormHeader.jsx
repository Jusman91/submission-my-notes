import PropTypes from 'prop-types';
import ICON_LOGIN from '../../../assets/img/icon-login.png';
import { useLanguageContext } from '../../../hooks/useContext';

const AuthFormHeader = ({ login }) => {
	const { language } = useLanguageContext();
	const textLogin = language === 'id' ? 'Gabung' : 'Login';
	const textRegister =
		language === 'id' ? 'Daftar' : 'Register';
	return (
		<div className='flex justify-center items-center gap-2 mb-8'>
			<h2 className='text-center text-xl font-bold text-gradient'>
				{login ? textLogin : textRegister}
			</h2>
			<img src={ICON_LOGIN} alt='Icon Login' />
		</div>
	);
};

AuthFormHeader.propTypes = {
	login: PropTypes.bool,
};

export default AuthFormHeader;
