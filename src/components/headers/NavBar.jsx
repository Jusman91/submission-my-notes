import { Logo } from '../fragments';
import ListsNav from './ListsNav';
import '../../styles/headers.css';

const NavBar = () => {
	return (
		<header className='flex justify-between headers'>
			<Logo />
			<ListsNav />
		</header>
	);
};

export default NavBar;
