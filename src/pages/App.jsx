import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Routes from '../routes';

function App() {
	return (
		<BrowserRouter>
			<ToastContainer />
			<Routes />
		</BrowserRouter>
	);
}

export default App;
