import { useEffect } from 'react';
import {
	addNote,
	archiveNote,
	deleteNote,
	editNote,
	getNote,
	unarchiveNote,
} from './noteService';

export const handleArchives = ({
	archived,
	id,
	navigate,
}) => {
	if (archived) {
		unarchiveNote(id);
		navigate('/');
	} else {
		archiveNote(id);
		navigate('/notes/archives');
	}
};

export const handleDelete = ({ id, navigate }) => {
	deleteNote(id);
	navigate('/');
};

export const handleChange = ({
	e,
	formData,
	setFormData,
}) => {
	const { name, value } = e.target;

	if (name === 'title' && value.length > 50) return;

	setFormData({ ...formData, title: e.target.value });
};

export const handleChangeBody = ({
	e,
	formData,
	setFormData,
}) => {
	const { innerHTML } = e.target;
	setFormData({ ...formData, body: innerHTML });
};

export const handleSubmit = ({
	e,
	id,
	formData,
	navigate,
}) => {
	e.preventDefault();

	if (id) {
		editNote({
			id,
			title: formData.title,
			body: formData.body,
		});
	} else {
		addNote({
			title: formData.title,
			body: formData.body,
		});
	}

	navigate('/');
};

export const useNoteEffect = ({
	id,
	navigate,
	setFormData,
}) => {
	useEffect(() => {
		if (id) {
			const existingNote = getNote(id);
			if (existingNote) {
				setFormData(existingNote);
			} else {
				navigate('/notes/no-content');
			}
		}
	}, [id, navigate, setFormData]);
};
