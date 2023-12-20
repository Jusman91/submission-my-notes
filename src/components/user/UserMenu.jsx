import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useToggle } from '../../hooks/useToggle';
import Accordion from '../elements/Accordion';
import ProfilePic from './ProfilePic';
import UserInfo from './UserInfo';
import UserLogoutButton from './UserLogoutButton';
import { handleLogout } from '../../utils/service/authService';

const UserMenu = () => {
	const { user } = useAuthContext();
	const [toggleMenu, setToggleMenu] = useToggle(false);
	const navigate = useNavigate();

	return (
		<div className='relative'>
			<div className='flex items-center gap-2'>
				<ProfilePic
					name={user.name}
					onClick={setToggleMenu}
				/>
				<UserLogoutButton
					onClick={() => handleLogout({ navigate })}
				/>
			</div>
			<Accordion
				open={toggleMenu}
				className='absolute right-0 mt-1 w-44'>
				<UserInfo data={user} />
			</Accordion>
		</div>
	);
};

export default UserMenu;
