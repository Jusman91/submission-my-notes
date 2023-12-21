import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from '../routes';
import AuthContextProvider from '../contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';

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
