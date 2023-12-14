import PropTypes from 'prop-types';

const Icon = ({ children, className, ...props }) => {
	return (
		<div
			{...props}
			className={`icon flex justify-center ${className}`}>
			{children}
		</div>
	);
};

Icon.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Icon;
