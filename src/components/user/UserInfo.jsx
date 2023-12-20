import PropTypes from 'prop-types';
import Icon from '../elements/Icon';
import {
	MdOutlineMailOutline,
	MdPerson,
} from 'react-icons/md';

const UserInfo = ({ data }) => {
	return (
		<div className='text-xs p-2 bg-gradient-radial rounded-md'>
			<div className='flex items-center gap-1'>
				<Icon className='text-lg'>{<MdPerson />}</Icon>
				<p className='capitalize whitespace-nowrap text-ellipsis overflow-hidden'>
					{data?.name}
				</p>
			</div>
			<div className='flex items-center gap-1'>
				<Icon className='text-lg'>
					{<MdOutlineMailOutline />}
				</Icon>
				<p className='whitespace-nowrap text-ellipsis overflow-hidden'>
					{data?.email}
				</p>
			</div>
		</div>
	);
};

UserInfo.propTypes = {
	data: PropTypes.shape({
		name: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
	}),
};

export default UserInfo;
