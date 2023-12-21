import { useNavigate, useParams } from 'react-router-dom';
import { formateDate } from '../../utils/service/globalService';
import {
	AddOrRemoveToArchive,
	DeleteNote,
} from '../../components/fragments';
import {
	handleArchives,
	handleDeleteNote,
} from '../../utils/service/noteService';
import { Loading } from '../../components/elements';
import NotFound404 from '../NotFound404';
import useFetch from '../../hooks/useFetch';

const DetailsNote = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const {
		data: note,
		loading,
		reFetch,
		error,
	} = useFetch(`/notes/${id}`);
	const { title, body, archived, createdAt } = note ?? {};

	if (error) {
		return <NotFound404 />;
	}

	return (
		<section className='mt-8'>
			{loading ? (
				<div className='text-center'>
					<Loading loading={loading} />
				</div>
			) : (
				<>
					<div className='flex items-center justify-center gap-2'>
						<h1 className='text-xl md:text-2xl lg:text-5xl font-bold'>
							{title}
						</h1>
						<AddOrRemoveToArchive
							archived={archived}
							onClick={() =>
								handleArchives({ archived, id, reFetch })
							}
						/>
						<DeleteNote
							onClick={() =>
								handleDeleteNote({ id, navigate })
							}
						/>
					</div>
					<small className='opacity-40'>
						{formateDate(createdAt)}
					</small>
					<p
						className='mt-4 ql-editor borderNone'
						dangerouslySetInnerHTML={{ __html: body }}
					/>
				</>
			)}
		</section>
	);
};

export default DetailsNote;
