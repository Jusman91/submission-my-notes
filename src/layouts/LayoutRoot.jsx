import { Navigate, Outlet } from 'react-router-dom';
import NavBar from '../components/headers/NavBar';
import Footer from '../components/footer/Footer';
import { useAuthContext } from '../hooks/useAuthContext';

const LayoutRoot = () => {
	const { user } = useAuthContext();

	if (!user) return <Navigate to='/auth/login' />;

	return (
		<>
			<NavBar />
			<main className='container max-w-[1440px] w-[90%] min-h-screen mx-auto py-8'>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default LayoutRoot;
