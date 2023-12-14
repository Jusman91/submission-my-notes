import PropTypes from 'prop-types';
import Input from '../elements/Input';
import LimitCharTitle from '../elements/LimitCharTitle';
import Button from '../elements/Button';
import '../../styles/form.css';
import { useParams } from 'react-router-dom';

const Form = ({
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
			className='wrapper-form'>
			<div className='wrapper-input'>
				<Input
					className='input-title'
					type='text'
					placeholder='Judul...'
					id='title'
					name='title'
					value={formValue.title}
					onChange={onChange}
				/>
				<LimitCharTitle
					titleCharacterCount={titleCharacterCount}
				/>
			</div>
			<div
				className='note-body'
				data-placeholder='Sebenarnya saya adalah ....'
				contentEditable
				onInput={onInput}
			/>
			<Button
				type='submit'
				className='btn-submit bg-gradient'>
				{`${id ? 'Edit' : 'Tambah'} catatan`}
			</Button>
		</form>
	);
};

Form.propTypes = {
	titleCharacterCount: PropTypes.number.isRequired,
	formValue: PropTypes.shape({
		title: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}).isRequired,
	onChange: PropTypes.func.isRequired,
	onInput: PropTypes.func.isRequired,
	onSubmit: PropTypes.func.isRequired,
};

export default Form;
