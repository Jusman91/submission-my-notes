import PropTypes from 'prop-types';
import {
	MdOutlineArchive,
	MdOutlineUnarchive,
} from 'react-icons/md';
import ButtonWithIcon from './ButtonWithIcon';

const AddOrRemoveToArchive = ({ onClick, archived }) => {
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
				tooltip={archived ? 'UnArchive' : 'Archive'}
				onClick={onClick}
			/>
		</div>
	);
};

AddOrRemoveToArchive.propTypes = {
	onClick: PropTypes.func.isRequired,
	archived: PropTypes.bool.isRequired,
};

export default AddOrRemoveToArchive;
