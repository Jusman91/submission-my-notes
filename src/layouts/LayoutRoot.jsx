import { Outlet } from 'react-router-dom';
import NavBar from '../components/headers/NavBar';
import Footer from '../components/footer/Footer';

const LayoutRoot = () => {
	return (
		<>
			<NavBar />
			<main className='container'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default LayoutRoot;
