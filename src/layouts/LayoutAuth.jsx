import { Outlet } from 'react-router-dom';
import BG_AUTH from '../assets/img/bg-auth.jpg';

const LayoutAuth = () => {
	localStorage.clear();
	return (
		<section className='grid lg:grid-cols-2 place-items-center min-h-screen'>
			<Outlet />
			<img
				src={BG_AUTH}
				alt='Background'
				className='hidden lg:block w-full h-screen object-cover'
			/>
		</section>
	);
};

export default LayoutAuth;
