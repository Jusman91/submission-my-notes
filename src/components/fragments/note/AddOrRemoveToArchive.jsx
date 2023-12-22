import PropTypes from 'prop-types';
import {
	MdOutlineArchive,
	MdOutlineUnarchive,
} from 'react-icons/md';
import ButtonWithIcon from '../ButtonWithIcon';
import { useLanguageContext } from '../../../hooks/useContext';

const AddOrRemoveToArchive = ({ onClick, archived }) => {
	const { language } = useLanguageContext();
	const archive =
		language === 'id' ? 'Arsipkan' : 'Archive';
	const unarchive =
		language === 'id' ? 'Aktifkan' : 'Unarchive';
	return (
		<div className='group'>
			<ButtonWithIcon
				icon={
					archived ? (
						<MdOutlineUnarchive />
					) : (
						<MdOutlineArchive />
					)
				}
				anchorSelectTooltip='btn-add-or-remove-to-archive'
				tooltip={archived ? unarchive : archive}
				onClick={onClick}
			/>
		</div>
	);
};

AddOrRemoveToArchive.propTypes = {
	onClick: PropTypes.func.isRequired,
	archived: PropTypes.bool,
};

export default AddOrRemoveToArchive;
