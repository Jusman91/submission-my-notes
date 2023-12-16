import { useNavigate, useParams } from 'react-router-dom';
import { getNote } from '../utils/noteService';
import { formateDate } from '../utils/globalService';
import {
	handleArchives,
	handleDelete,
} from '../utils/noteHandler';
import {
	AddOrRemoveToArchive,
	DeleteNote,
	GoToEditeNote,
} from '../components/fragments';

const DetailsNote = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const note = getNote(id) || {};
	const { title, body, archived } = note;
	const createdAt = formateDate(note.createdAt);

	return (
		<section className='mt-8'>
			<div className='flex items-center justify-center gap-2'>
				<h1 className='text-3xl lg:text-5xl font-bold'>
					{title}
				</h1>
				<AddOrRemoveToArchive
					archived={archived}
					onClick={() =>
						handleArchives({ id, archived, navigate })
					}
				/>
				<GoToEditeNote id={id} />
				<DeleteNote
					onClick={() => handleDelete({ id, navigate })}
				/>
			</div>
			<small className='opacity-40'>{createdAt}</small>
			<p
				className='mt-4'
				dangerouslySetInnerHTML={{ __html: body }}
			/>
		</section>
	);
};

export default DetailsNote;
