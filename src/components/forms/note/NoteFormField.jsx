import NoteFieldFragment from './NoteFieldFragment';
import ReactQuill from '../../../lib/editor/ReactQuill';
import { useFormikContext } from 'formik';
import { useLanguageContext } from '../../../hooks/useContext';

const NoteFormField = () => {
	const { setFieldValue, values } = useFormikContext();
	const { language } = useLanguageContext();
	return (
		<div>
			<NoteFieldFragment
				type='text'
				id='title'
				name='title'
				label={language === 'id' ? 'Judul:' : 'Title:'}
			/>
			<ReactQuill
				setBody={(newValues) => {
					setFieldValue('body', newValues);
				}}
				value={values.body}
			/>
		</div>
	);
};

export default NoteFormField;
