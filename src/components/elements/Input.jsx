import PropTypes from 'prop-types';
import { twMerge as tm } from 'tailwind-merge';

const Input = ({ className, ...props }) => {
	return (
		<input
			{...props}
			className={tm(
				'px-2 py-1 bg-transparent border border-primary-500 rounded-2xl outline-none focus:border-secondary-700 duration-500 text-sm md:text-base',
				className,
			)}
		/>
	);
};

Input.propTypes = {
	className: PropTypes.string,
};

export default Input;
