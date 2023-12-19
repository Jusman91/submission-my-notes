import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from '../routes';
import 'react-toastify/dist/ReactToastify.css';
import AuthContextProvider from '../contexts/AuthContext';

function App() {
	return (
		<AuthContextProvider>
			<BrowserRouter>
				<ToastContainer />
				<Routes />
			</BrowserRouter>
		</AuthContextProvider>
	);
}

export default App;
