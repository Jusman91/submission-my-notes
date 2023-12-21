import PropTypes from 'prop-types';
import { Button, Loading } from '../../elements';

const AuthFormButton = ({ login, isSubmitting }) => {
	return (
		<Button
			disabled={isSubmitting}
			className='rounded-3xl'
			type='submit'>
			{isSubmitting ? (
				<>
					<Loading loading={isSubmitting} size={20} />
					Loading...
				</>
			) : login ? (
				'Login'
			) : (
				'Register'
			)}
		</Button>
	);
};

AuthFormButton.propTypes = {
	login: PropTypes.bool,
	isSubmitting: PropTypes.bool,
};

export default AuthFormButton;
