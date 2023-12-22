import { useFormikContext } from 'formik';
import { useLanguageContext } from '../../../hooks/useContext';

const NoteFormHeader = () => {
	const { touched, errors } = useFormikContext();
	const { language } = useLanguageContext();
	return (
		<div className='flex flex-col text-center'>
			{touched.title && errors.title ? (
				<small className='text-red-600'>
					{errors.title}
				</small>
			) : null}
			{touched.body && errors.body ? (
				<small className='text-red-600'>
					{errors.body}
				</small>
			) : null}
			<h1 className='text-xl md:text-2xl text-center font-semibold capitalize pt-2'>
				{language === 'id' ? 'Buat Catatan' : 'Create note'}
			</h1>
		</div>
	);
};

export default NoteFormHeader;
