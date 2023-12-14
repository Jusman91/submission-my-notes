import PropTypes from 'prop-types';

const Typography = ({ children, className, ...props }) => {
	return (
		<h6 {...props} className={`${className}`}>
			{children}
		</h6>
	);
};

Typography.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Typography;
