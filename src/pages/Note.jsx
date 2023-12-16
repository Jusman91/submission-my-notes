import { useState } from 'react';
import { FormNote } from '../components/fragments';
import {
	useHref,
	useNavigate,
	useParams,
} from 'react-router-dom';
import {
	handleChange,
	handleChangeBody,
	handleSubmit,
	useNoteEffect,
} from '../utils/noteHandler';

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
		<section className='max-w-3xl mx-auto'>
			<h1 className='text-xl md:text-2xl text-center font-semibold capitalize py-2'>
				{titleContent} note
			</h1>
			<FormNote
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
		</section>
	);
};

export default Note;
