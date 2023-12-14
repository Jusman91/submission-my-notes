import PropTypes from 'prop-types';
import {
	MdOutlineArchive,
	MdOutlineUnarchive,
} from 'react-icons/md';
import CustomButton from './CustomButton';

const AddOrRemoveToArchive = ({ onClick, archived }) => {
	return (
		<CustomButton
			className='btn-circle wrapper'
			icon={
				archived ? (
					<MdOutlineUnarchive />
				) : (
					<MdOutlineArchive />
				)
			}
			anchorSelectTooltip='btn-add-or-remove-to-archive'
			tooltip={archived ? 'UnArchive' : 'Archive'}
			onClick={onClick}
		/>
	);
};

AddOrRemoveToArchive.propTypes = {
	onClick: PropTypes.func.isRequired,
	archived: PropTypes.bool.isRequired,
};

export default AddOrRemoveToArchive;
