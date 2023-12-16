import PropTypes from 'prop-types';
import { twMerge as tm } from 'tailwind-merge';

const Button = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={tm(
				'flex items-center justify-center py-2 px-4 outline-none border-none cursor-pointer rounded-xl',
				className,
			)}>
			{children}
		</button>
	);
};

Button.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
};

export default Button;
