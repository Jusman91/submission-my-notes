import { Loading } from '../../components/elements';
import NoteList from '../../components/templates/NoteList';
import { useLanguageContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';

const ArchivedNotes = () => {
	const { data: notes, loading } = useFetch(
		'/notes/archived',
	);
	const { language } = useLanguageContext();
	return (
		<section>
			{loading ? (
				<div className='text-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<NoteList
					text={
						language === 'id'
							? 'Catatan Arsip'
							: 'Archive notes'
					}
					notes={notes || []}
				/>
			)}
		</section>
	);
};

export default ArchivedNotes;
