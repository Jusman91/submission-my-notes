import { useNavigate, useParams } from 'react-router-dom';
import Typography from '../components/elements/Typography';
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
import '../styles/details.css';

const DetailsNote = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const note = getNote(id) || {};
	const { title, body, archived } = note;
	const createdAt = formateDate(note.createdAt);

	return (
		<section className='container-section'>
			<div className='flex justify-center wrapper-title'>
				<Typography className='note-title'>
					{title}
				</Typography>
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
			<small>{createdAt}</small>
			<p dangerouslySetInnerHTML={{ __html: body }} />
		</section>
	);
};

export default DetailsNote;
