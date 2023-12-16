import { dataNotes } from './local-data';

let notes = dataNotes;

export function getAllNotes() {
	return notes;
}

export function getNote(id) {
	const foundedNote = notes.find((note) => note.id === id);
	return foundedNote;
}

export function getActiveNotes() {
	const activeNotes = notes.filter(
		(note) => !note.archived,
	);
	return activeNotes;
}

export function getArchivedNotes() {
	const archivedNotes = notes.filter(
		(note) => note.archived,
	);
	return archivedNotes;
}

export function addNote({ title, body }) {
	notes = [
		...notes,
		{
			id: `notes-${+new Date()}`,
			title: title || '(untitled)',
			body,
			createdAt: new Date().toISOString(),
			archived: false,
		},
	];
}

export function deleteNote(id) {
	notes = notes.filter((note) => note.id !== id);
}

export function archiveNote(id) {
	notes = notes.map((note) => {
		if (note.id === id) {
			return { ...note, archived: true };
		}
		return note;
	});
}

export function unarchiveNote(id) {
	notes = notes.map((note) => {
		if (note.id === id) {
			return { ...note, archived: false };
		}

		return note;
	});
}

export function editNote({ id, title, body }) {
	const noteToEdit = notes.find((note) => note.id === id);
	noteToEdit.title = title;
	noteToEdit.body = body;

	notes = notes.map((note) => {
		if (note.id === id) {
			return note;
		}
		return note;
	});
}
