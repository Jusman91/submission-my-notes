import NoteFormHeader from './NoteFormHeader';
import NoteFormField from './NoteFormField';
import NoteFormButton from './NoteFormButton';
import { Form, Formik } from 'formik';
import { submitNote } from '../../../utils/service/noteService';
import {
	initalValuesNoteForm,
	noteValidationSchema,
} from '../../../validations/noteFormValidation';

const NoteForm = () => {
	return (
		<Formik
			initialValues={initalValuesNoteForm}
			validationSchema={noteValidationSchema}
			onSubmit={(values, { setSubmitting, setValues }) =>
				submitNote({
					newNote: values,
					setValues,
					setSubmitting,
				})
			}>
			{({ isSubmitting }) => (
				<Form className='w-full flex flex-col gap-4'>
					<NoteFormHeader />
					<NoteFormField />
					<NoteFormButton isSubmitting={isSubmitting} />
				</Form>
			)}
		</Formik>
	);
};

export default NoteForm;
