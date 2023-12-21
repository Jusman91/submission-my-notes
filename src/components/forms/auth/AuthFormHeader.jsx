import PropTypes from 'prop-types';
import ICON_LOGIN from '../../../assets/img/icon-login.png';

const AuthFormHeader = ({ login }) => {
	return (
		<div className='flex justify-center items-center gap-2 mb-8'>
			<h2 className='text-center text-xl font-bold text-gradient'>
				{login ? 'Sign In' : 'Sign Up'}
			</h2>
			<img src={ICON_LOGIN} alt='Icon Login' />
		</div>
	);
};

AuthFormHeader.propTypes = {
	login: PropTypes.bool,
};

export default AuthFormHeader;
