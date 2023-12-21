import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import ButtonWithIcon from '../ButtonWithIcon';

const DeleteNote = ({ onClick }) => {
	return (
		<div className='group'>
			<ButtonWithIcon
				icon={<MdDelete />}
				anchorSelectTooltip='btn-delete'
				tooltip='Delete'
				onClick={onClick}
			/>
		</div>
	);
};

DeleteNote.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default DeleteNote;
