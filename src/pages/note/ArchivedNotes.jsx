import { Loading } from '../../components/elements';
import NoteList from '../../components/templates/NoteList';
import useFetch from '../../hooks/useFetch';

const ArchivedNotes = () => {
	const { data: notes, loading } = useFetch(
		'/notes/archived',
	);
	return (
		<section>
			{loading ? (
				<div className='text-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<NoteList
					text='Catatan Arsip'
					notes={notes || []}
				/>
			)}
		</section>
	);
};

export default ArchivedNotes;
