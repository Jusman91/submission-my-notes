import PropTypes from 'prop-types';
import Input from '../elements/Input';
import Button from '../elements/Button';
import { useParams } from 'react-router-dom';

const FormNote = ({
	titleCharacterCount,
	formValue,
	onChange,
	onInput,
	onSubmit,
}) => {
	const { id } = useParams();

	return (
		<form
			onSubmit={onSubmit}
			action=''
			className='w-full flex flex-col gap-4'>
			<div className='relative'>
				<Input
					className='w-full p-2'
					type='text'
					placeholder='Judul...'
					id='title'
					name='title'
					value={formValue.title}
					onChange={onChange}
				/>
				<small className='absolute bottom-1 right-1 opacity-40 text-xs'>
					Sisa karakter {50 - titleCharacterCount}
				</small>
			</div>
			<div
				className={`empty:before:content-[attr(placeholder)] text-sm md:text-base before:text-gray-400 border border-primary-500 focus:border-secondary-700 outline-none rounded-2xl w-full min-h-[350px] p-2 duration-300`}
				placeholder='Sebenarnya saya adalah ....'
				contentEditable
				onInput={onInput}
			/>
			<Button
				type='submit'
				className='text-sm md:text-base font-semibold bg-gradient-radial hover:shadow-wrapper duration-500'>
				{`${id ? 'Edit' : 'Tambah'} catatan`}
			</Button>
		</form>
	);
};

FormNote.propTypes = {
	titleCharacterCount: PropTypes.number.isRequired,
	formValue: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}).isRequired,
	onChange: PropTypes.func.isRequired,
	onInput: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default FormNote;
