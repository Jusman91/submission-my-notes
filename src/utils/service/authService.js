import { toast } from 'react-toastify';
import API from '../../api/axiosInstance';
import {
	FULFILLED_USER,
	PENDING_USER,
	REJECTED_USER,
} from '../../static/actionTypes';

export function getAccessToken() {
	return JSON.parse(
		localStorage.getItem('accessToken') || null,
	);
}

export function putAccessToken(accessToken) {
	return localStorage.setItem(
		'accessToken',
		JSON.stringify(accessToken),
	);
}

export function getUser() {
	return JSON.parse(localStorage.getItem('user')) || null;
}

export function putUser(user) {
	return localStorage.setItem('user', JSON.stringify(user));
}

export async function register(params, navigate) {
	try {
		const { data } = await API.post('register', params);
		toast.success(`${data.message} Please Login Now`);
		navigate('/auth/login');
	} catch (error) {
		toast.error(error.response.data.message);
	}
}

export async function getToken({ email, password }) {
	try {
		const { data } = await API.post('login', {
			email,
			password,
		});
		const accessToken = data.data.accessToken;
		putAccessToken(accessToken);
		toast.success(data.message);
	} catch (error) {
		toast.error(error.response.data.message);
		throw error;
	}
}

export async function getLoggedUser({
	credentials,
	dispatch,
	navigate,
}) {
	dispatch({ type: PENDING_USER });
	try {
		await getToken(credentials);
		const { data } = await API.get('users/me');
		const user = data.data;
		putUser(user);
		dispatch({ type: FULFILLED_USER });
		navigate('/');
	} catch (error) {
		dispatch({
			type: REJECTED_USER,
			payload: error.response.data.message,
		});
		throw error;
	}
}

export function handleLogout({ navigate }) {
	localStorage.removeItem('user');
	localStorage.removeItem('accessToken');
	navigate('/auth/login');
	toast.success('Logout successful');
}
