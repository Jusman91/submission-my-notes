import PropTypes from 'prop-types';
import { MdDelete } from 'react-icons/md';
import ButtonWithIcon from '../ButtonWithIcon';
import { useLanguageContext } from '../../../hooks/useContext';

const DeleteNote = ({ onClick }) => {
	const { language } = useLanguageContext();
	return (
		<div className='group'>
			<ButtonWithIcon
				icon={<MdDelete />}
				anchorSelectTooltip='btn-delete'
				tooltip={language === 'id' ? 'Hapus' : 'Delete'}
				onClick={onClick}
			/>
		</div>
	);
};

DeleteNote.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default DeleteNote;
