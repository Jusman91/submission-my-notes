import { Loading } from '../../components/elements';
import NoteList from '../../components/templates/NoteList';
import { useLanguageContext } from '../../hooks/useContext';
import useFetch from '../../hooks/useFetch';
import NotFound404 from '../NotFound404';

const ActiveNotes = () => {
	const {
		data: notes,
		loading,
		error,
	} = useFetch('/notes');
	const { language } = useLanguageContext();

	if (error) return <NotFound404 error={error} />;
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
