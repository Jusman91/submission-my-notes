import PropTypes from 'prop-types';
import { cva } from 'class-variance-authority';
import { cn } from '../../utils/globalService';

const Input = ({ className, validation, ...props }) => {
	const inputVariants = cva(
		'block p-2 bg-transparent border rounded-2xl w-full outline-none transition-all duration-500 text-sm',
		{
			variants: {
				validation: {
					default:
						'border-primary-500 focus:border-secondary-700',
					success:
						'border-green-700 valid:text-green-500 valid:border-green-700 focus:border-green-700 focus:text-green-500',
					error:
						'border-red-700 valid:text-red-500 valid:border-red-700 focus:border-red-700 focus:text-red-500',
				},
			},
			defaultVariants: {
				validation: 'default',
			},
		},
	);
	return (
		<input
			autoComplete='off'
			className={cn(
				inputVariants({ validation, className }),
			)}
			{...props}
		/>
	);
};

Input.propTypes = {
	className: PropTypes.string,
	validation: PropTypes.oneOf([
		'default',
		'success',
		'error',
	]),
};

export default Input;
