import PropTypes from 'prop-types';

const NoContent = ({ text }) => {
	return (
		<h4 className='text-center mt-8 opacity-50'>{text}</h4>
	);
};

NoContent.propTypes = {
	text: PropTypes.string.isRequired,
};

export default NoContent;
