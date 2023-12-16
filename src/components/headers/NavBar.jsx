import { Logo } from '../fragments';
import ListsNav from './ListsNav';

const NavBar = () => {
	return (
		<header className='flex items-center justify-between p-2 shadow-header'>
			<Logo />
			<ListsNav />
		</header>
	);
};

export default NavBar;
