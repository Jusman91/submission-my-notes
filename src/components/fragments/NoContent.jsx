import PropTypes from 'prop-types';
import Typography from '../elements/Typography';

const NoContent = ({ text }) => {
	return (
		<Typography className='no-content'>{text}</Typography>
	);
};

NoContent.propTypes = {
	text: PropTypes.string.isRequired,
};

export default NoContent;
