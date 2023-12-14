import PropTypes from 'prop-types';

const Button = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={`flex justify-center btn bg-gradient  ${className}`}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Button;
