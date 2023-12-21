import { Loading } from '../../components/elements';
import NoteList from '../../components/templates/NoteList';
import useFetch from '../../hooks/useFetch';

const ActiveNotes = () => {
	const { data: notes, loading } = useFetch('/notes');
	return (
		<section>
			{loading ? (
				<div className='text-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<NoteList
					text='Catatan Aktif'
					notes={notes || []}
				/>
			)}
		</section>
	);
};

export default ActiveNotes;
