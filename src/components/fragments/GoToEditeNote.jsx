import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { MdOutlineEditNote } from 'react-icons/md';
import ButtonWithIcon from './ButtonWithIcon';

const GoToEditeNote = ({ id }) => {
	return (
		<Link to={`/notes/${id}/edit`} className='group'>
			<ButtonWithIcon
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
