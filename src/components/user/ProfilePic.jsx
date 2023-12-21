import PropTypes from 'prop-types';
import { getInitialName } from '../../utils/service/globalService';

const ProfilePic = ({ name }) => {
	return (
		<div className='text-center w-8 h-8 bg-primary-300 rounded-full cursor-pointer'>
			<span className='text-secondary-500 text-xl font-semibold'>
				{getInitialName(name)}
			</span>
		</div>
	);
};

ProfilePic.propTypes = {
	name: PropTypes.string.isRequired,
};

export default ProfilePic;
