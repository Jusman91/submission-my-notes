import PropTypes from 'prop-types';
import { Button } from '../../elements';
import { ClipLoader } from 'react-spinners';

const AuthButtonForm = ({ login, isSubmitting }) => {
	return (
		<Button
			disabled={isSubmitting}
			className='rounded-3xl'
			type='submit'>
			{login ? 'Login' : 'Register'}
			{isSubmitting ? (
				<ClipLoader
					color='#fff'
					loading={isSubmitting && isSubmitting}
					size={20}
				/>
			) : null}
		</Button>
	);
};

AuthButtonForm.propTypes = {
	login: PropTypes.bool,
	isSubmitting: PropTypes.bool,
};

export default AuthButtonForm;
