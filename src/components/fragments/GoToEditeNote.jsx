import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import { MdOutlineEditNote } from 'react-icons/md';

const GoToEditeNote = ({ id }) => {
	return (
		<Link to={`/notes/${id}/edit`}>
			<CustomButton
				className='btn-circle wrapper'
				icon={<MdOutlineEditNote />}
				anchorSelectTooltip='btn-go-to-edit-note'
				tooltip='Edit'
			/>
		</Link>
	);
};

GoToEditeNote.propTypes = {
	id: PropTypes.string.isRequired,
};

export default GoToEditeNote;
