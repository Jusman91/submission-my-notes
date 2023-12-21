import PropTypes from 'prop-types';
import { Button, Loading } from '../../elements';

const NoteFormButton = ({ isSubmitting }) => {
	return (
		<Button
			type='submit'
			className='text-sm md:text-base font-semibold rounded-md bg-gradient-radial hover:shadow-wrapper duration-500 mt-20'>
			{isSubmitting ? (
				<>
					<Loading loading={isSubmitting} size={20} />
					Loading...
				</>
			) : (
				'Create note'
			)}
		</Button>
	);
};

NoteFormButton.propTypes = {
	isSubmitting: PropTypes.bool.isRequired,
};

export default NoteFormButton;
