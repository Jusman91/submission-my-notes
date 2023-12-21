import * as Yup from 'yup';
export const initalValuesNoteForm = {
	title: '',
	body: '',
};

export const noteValidationSchema = Yup.object().shape({
	title: Yup.string()
		.required('Title is required')
		.min(10, 'Title must be at least 10 characters')
		.max(50, 'Title up to 50 characters long'),
	body: Yup.string().required('Body is required'),
});
