import { Link } from 'react-router-dom';
import LOGO from '../../assets/img/logo-note.png';

const Logo = () => {
	return (
		<Link
			to={'/'}
			className='flex items-center justify-center gap-2'>
			<img
				src={LOGO}
				alt='Logo'
				className='w-8 h-8 md:w-16 md:h-16 object-cover'
			/>
			<h1 className='text-lg md:text-3xl text-gradient font-bold'>
				My Notes
			</h1>
		</Link>
	);
};

export default Logo;
