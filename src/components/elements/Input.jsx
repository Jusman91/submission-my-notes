import PropTypes from 'prop-types';

const Input = ({ className, ...props }) => {
	return <input {...props} className={`${className}`} />;
};

Input.propTypes = {
	className: PropTypes.string,
};

export default Input;
