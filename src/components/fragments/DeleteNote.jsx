import PropTypes from 'prop-types';
import CustomButton from './CustomButton';
import { MdDelete } from 'react-icons/md';

const DeleteNote = ({ onClick }) => {
	return (
		<CustomButton
			className='btn-circle wrapper'
			icon={<MdDelete />}
			anchorSelectTooltip='btn-delete'
			tooltip='Delete'
			onClick={onClick}
		/>
	);
};

DeleteNote.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default DeleteNote;
