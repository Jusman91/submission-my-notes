import NoteList from '../components/templates/NoteList';
import { getAllNotes } from '../utils/noteService';

const Notes = () => {
	const notes = getAllNotes() || [];
	return <NoteList text='All Notes' notes={notes} />;
};

export default Notes;
