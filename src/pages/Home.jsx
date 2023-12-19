import ActiveNotes from './ActiveNotes';
import { useAuthContext } from '../hooks/useAuthContext';

const Home = () => {
	const { user } = useAuthContext();
	console.log('user', user);

	return <ActiveNotes />;
};

export default Home;
