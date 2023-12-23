import PropTypes from 'prop-types';
import { getInitialName } from '../../utils/service/globalService';

const ProfilePic = ({ name }) => {
	return (
		<div className='text-center w-6 h-6 md:w-8 md:h-8 bg-primary-2 rounded-full cursor-pointer'>
			<span className='text-white text-base md:text-xl font-medium'>
				{getInitialName(name)}
			</span>
		</div>
	);
};

ProfilePic.propTypes = {
	name: PropTypes.string.isRequired,
};

export default ProfilePic;
