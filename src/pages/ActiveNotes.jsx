import NoteList from '../components/templates/NoteList';
import { getActiveNotes } from '../utils/noteService';

const ActiveNotes = () => {
	const notes = getActiveNotes() || [];
	return <NoteList text='Catatan Aktif' notes={notes} />;
};

export default ActiveNotes;
