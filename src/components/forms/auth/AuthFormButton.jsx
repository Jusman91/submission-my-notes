import PropTypes from 'prop-types';
import { Button, Loading } from '../../elements';
import { useAuthContext } from '../../../hooks/useContext';

const AuthFormButton = ({ login, isSubmitting }) => {
	const { loading } = useAuthContext();
	return (
		<Button
			disabled={loading || isSubmitting}
			className='rounded-3xl'
			type='submit'>
			{loading || isSubmitting ? (
				<>
					<Loading
						loading={loading || isSubmitting}
						size={20}
					/>
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
