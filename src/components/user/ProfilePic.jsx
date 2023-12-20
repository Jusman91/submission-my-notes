import PropTypes from 'prop-types';
import { getInitialName } from '../../utils/globalService';
import { Tooltip } from 'react-tooltip';

const ProfilePic = ({ name, onClick }) => {
	return (
		<div
			id='user-info'
			className='text-center w-8 h-8 bg-primary-300 rounded-full cursor-pointer'
			onClick={onClick}>
			<span className='text-secondary-500 text-xl font-semibold'>
				{getInitialName(name)}
			</span>
			<Tooltip
				style={{ fontSize: '11px' }}
				anchorSelect='#user-info'
				content='User Info'
			/>
		</div>
	);
};

ProfilePic.propTypes = {
	name: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired,
};

export default ProfilePic;
