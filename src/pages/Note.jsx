import { useState } from 'react';
import { EditPreview, Form } from '../components/fragments';
import {
	useHref,
	useNavigate,
	useParams,
} from 'react-router-dom';
import Typography from '../components/elements/Typography';
import {
	handleChange,
	handleChangeBody,
	handleSubmit,
	useNoteEffect,
} from '../utils/noteHandler';
import '../styles/node.css';

const Note = () => {
	const { id } = useParams();
	const href = useHref();
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		title: '',
		body: '',
	});
	const titleContent = href.split('/').reverse()[0];

	useNoteEffect({ id, navigate, setFormData });

	return (
		<section className='container container-create-note'>
			<Typography className='h1 title-content'>
				{titleContent} note
			</Typography>
			<div className='flex container-form'>
				<Form
					titleCharacterCount={formData.title.length}
					onChange={(e) =>
						handleChange({ e, formData, setFormData })
					}
					onInput={(e) =>
						handleChangeBody({ e, formData, setFormData })
					}
					formValue={formData}
					onSubmit={(e) =>
						handleSubmit({ e, formData, id, navigate })
					}
				/>
				{id && (
					<EditPreview
						title={formData.title}
						body={formData.body}
					/>
				)}
			</div>
		</section>
	);
};

export default Note;
