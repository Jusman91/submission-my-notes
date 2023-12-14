import PropTypes from 'prop-types';

const LimitCharTitle = ({ titleCharacterCount }) => {
	return (
		<small>Sisa karakter {50 - titleCharacterCount}</small>
	);
};

LimitCharTitle.propTypes = {
	titleCharacterCount: PropTypes.number.isRequired,
};

export default LimitCharTitle;
