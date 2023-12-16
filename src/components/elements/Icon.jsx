import PropTypes from 'prop-types';
import { twMerge as tm } from 'tailwind-merge';

const Icon = ({ children, className, ...props }) => {
	return (
		<div
			{...props}
			className={tm(
				'text-secondary-500 text-2xl flex justify-center',
				className,
			)}>
			{children}
		</div>
	);
};

Icon.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Icon;
