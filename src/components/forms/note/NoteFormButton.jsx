import PropTypes from 'prop-types';
import { Button, Loading } from '../../elements';
import { useLanguageContext } from '../../../hooks/useContext';

const NoteFormButton = ({ isSubmitting }) => {
	const { language } = useLanguageContext();
	return (
		<Button
			type='submit'
			className='text-white text-sm md:text-base font-semibold rounded-md bg-gradient-radial hover:shadow-wrapper duration-500 mt-20'>
			{isSubmitting ? (
				<>
					<Loading loading={isSubmitting} size={20} />
					Loading...
				</>
			) : language === 'id' ? (
				'Buat catatan'
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
