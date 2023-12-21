import PropTypes from 'prop-types';
import { containerQuill } from './containerQuill';
import ReactQuill from 'react-quill';

const Quill = ({ setBody, value }) => {
	const container = containerQuill;
	const modules = { toolbar: { container } };

	const handleChange = (e) => {
		setBody(e);
	};
	return (
		<ReactQuill
			className='h-[50vh] mt-2'
			theme='snow'
			modules={modules}
			onChange={handleChange}
			value={value}
		/>
	);
};

Quill.propTypes = {
	setBody: PropTypes.func.isRequired,
	value: PropTypes.string.isRequired,
};

export default Quill;
