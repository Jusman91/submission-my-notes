import PropTypes from 'prop-types';
import { getInitialName } from '../../utils/service/globalService';

const ProfilePic = ({ name }) => {
	return (
		<div className='text-center w-8 h-8 bg-primary-2 rounded-full cursor-pointer'>
			<span className='text-white text-xl font-medium'>
				{getInitialName(name)}
			</span>
		</div>
	);
};

ProfilePic.propTypes = {
	name: PropTypes.string.isRequired,
};

export default ProfilePic;
