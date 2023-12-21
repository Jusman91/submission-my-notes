import NoteFieldFragment from './NoteFieldFragment';
import ReactQuill from '../../../lib/editor/ReactQuill';
import { useFormikContext } from 'formik';

const NoteFormField = () => {
	const { setFieldValue, values, errors, touched } =
		useFormikContext();
	return (
		<div>
			<NoteFieldFragment
				type='text'
				id='title'
				name='title'
				label='Title:'
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
