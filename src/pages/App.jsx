import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from '../routes';
import AuthContextProvider from '../contexts/AuthContext';
import 'react-toastify/dist/ReactToastify.css';
import 'react-quill/dist/quill.snow.css';
import ThemeContextProvider from '../contexts/ThemeContext';
import LanguageContextProvider from '../contexts/LanguageContext';

function App() {
	return (
		<ThemeContextProvider>
			<LanguageContextProvider>
				<AuthContextProvider>
					<BrowserRouter>
						<ToastContainer />
						<Routes />
					</BrowserRouter>
				</AuthContextProvider>
			</LanguageContextProvider>
		</ThemeContextProvider>
	);
}

export default App;
