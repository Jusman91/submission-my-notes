import { toast } from 'react-toastify';
import API from '../../api/axiosInstance';

export async function createNote(newNote) {
	try {
		const { data } = await API.post('/notes', newNote);
		toast.success(data.message);
	} catch (error) {
		toast.error(error.response.data.message);
	}
}

export async function deleteNote({ id, navigate }) {
	try {
		const { data } = await API.delete(`/notes/${id}`);
		toast.success(data.message);
		navigate('/');
	} catch (error) {
		console.log(error);
		toast.error(error.response.data.message);
	}
}

export async function submitNote({
	newNote,
	setValues,
	setSubmitting,
}) {
	await createNote(newNote);
	await setValues({ title: '', body: '' });
	setSubmitting(false);
}

export function handleDeleteNote({ id, navigate }) {
	deleteNote({ id, navigate });
}

export async function archive({ id }) {
	try {
		const { data } = await API.post(`/notes/${id}/archive`);
		toast.success(data.message);
	} catch (error) {
		toast.error(error.response.data.message);
	}
}

export async function unarchive({ id }) {
	try {
		const { data } = await API.post(
			`/notes/${id}/unarchive`,
		);
		toast.success(data.message);
	} catch (error) {
		toast.error(error.response.data.message);
	}
}

export const handleArchives = ({
	id,
	archived,
	reFetch,
}) => {
	if (archived) {
		unarchive({ id }).then(() => {
			reFetch();
		});
	} else {
		archive({ id }).then(() => {
			reFetch();
		});
	}
};
