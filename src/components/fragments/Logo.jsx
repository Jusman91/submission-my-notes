import { Link } from 'react-router-dom';
import LOGO from '../../assets/img/logo-note.png';
import { useLanguageContext } from '../../hooks/useContext';

const Logo = () => {
	const { language } = useLanguageContext();
	return (
		<Link
			to={'/'}
			className='flex items-center justify-center gap-2'>
			<img
				src={LOGO}
				alt='Logo'
				className='w-6 h-6 md:w-16 md:h-16 object-cover'
			/>
			<h1 className='text-xs md:text-3xl text-gradient font-bold'>
				{language === 'id' ? 'Catatan Saya' : 'My Notes'}
			</h1>
		</Link>
	);
};

export default Logo;
