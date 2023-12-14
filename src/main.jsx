import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './pages';
// import 'react-tooltip/dist/react-tooltip.css';
import './styles/index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);