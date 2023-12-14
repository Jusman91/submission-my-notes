import NoteList from '../components/templates/NoteList';
import { getArchivedNotes } from '../utils/noteService';

const ArchivedNotes = () => {
	const notes = getArchivedNotes() || [];
	return (
		<section>
			<NoteList text='Catatan Arsip' notes={notes} />
		</section>
	);
};

export default ArchivedNotes;
