import PropTypes from 'prop-types';
import { cn } from '../../utils/globalService';

const Button = ({ children, className, ...props }) => {
	return (
		<button
			{...props}
			className={cn(
				'flex items-center justify-center py-2 px-4 font-medium outline-none border-none cursor-pointer rounded-xl bg-primary-500 hover:bg-primary-400 duration-300',
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
