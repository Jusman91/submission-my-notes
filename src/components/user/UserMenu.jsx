import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useContext';
import ProfilePic from './ProfilePic';
import UserInfo from './UserInfo';
import UserLogoutButton from './UserLogoutButton';
import { handleLogout } from '../../utils/service/authService';

const UserMenu = () => {
	const { user } = useAuthContext();
	const navigate = useNavigate();

	return (
		<div className='flex gap-2 text-white'>
			<div className='relative group'>
				<div className='flex items-center gap-2'>
					<ProfilePic name={user.name} />
				</div>
				<div className='absolute right-0 mt-1 w-44 grid transition-[grid-template-rows,opacity] duration-300 grid-rows-[0fr] opacity-0 group-hover:grid-rows-[1fr] group-hover:opacity-100'>
					<div className='overflow-hidden'>
						<UserInfo data={user} />
					</div>
				</div>
			</div>
			<UserLogoutButton
				onClick={() => handleLogout({ navigate })}
			/>
		</div>
	);
};

export default UserMenu;
