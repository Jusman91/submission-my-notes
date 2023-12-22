import { Loading } from '../../components/elements';
import NoteList from '../../components/templates/NoteList';
import { useLanguageContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';

const ActiveNotes = () => {
	const { data: notes, loading } = useFetch('/notes');
	const { language } = useLanguageContext();
	return (
		<section className=''>
			{loading ? (
				<div className='text-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<NoteList
					text={
						language === 'id'
							? 'Catatan Aktif'
							: 'Active notes'
					}
					notes={notes || []}
				/>
			)}
		</section>
	);
};

export default ActiveNotes;
