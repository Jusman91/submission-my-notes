import PropTypes from 'prop-types';
import { Input, Label } from '../../elements';
import { useFormikContext } from 'formik';

const NoteFieldFragment = ({ label, type, id, name }) => {
	const { values, handleChange, handleBlur } =
		useFormikContext();
	return (
		<div>
			<Label className='text-base md:text-lg tracking-widest font-medium'>
				{label}
			</Label>
			<Input
				className='rounded-md'
				type={type}
				id={id}
				name={name}
				value={values[name]}
				onChange={handleChange}
				onBlur={handleBlur}
			/>
		</div>
	);
};

NoteFieldFragment.propTypes = {
	type: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
};

export default NoteFieldFragment;
