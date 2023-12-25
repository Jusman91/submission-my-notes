import PropTypes from 'prop-types';
import { cn } from '../../utils/service/globalService';

const Button = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={cn(
				'flex items-center justify-center py-2 px-4 text-white font-medium outline-none border-none cursor-pointer rounded-xl bg-primary-2 hover:bg-primary-1 duration-300 disabled:cursor-not-allowed',
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
