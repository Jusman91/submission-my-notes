import axios from 'axios';
import { getAccessToken } from '../utils/service/authService';

const API = axios.create({
	baseURL: `${import.meta.env.VITE_API_URL}/v1`,
	headers: {
		'Content-Type': 'application/json',
	},
});

API.interceptors.request.use((req) => {
	const accessToken = getAccessToken();
	if (accessToken) {
		req.headers.Authorization = `Bearer ${accessToken}`;
	}

	return req;
});

API.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			localStorage.removeItem('user');
			localStorage.removeItem('accessToken');
			window.location.href = '/auth/login';
		}

		return Promise.reject(error);
	},
);

export default API;
