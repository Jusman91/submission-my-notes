import PropTypes from 'prop-types';
import { cn } from '../../utils/service/globalService';
import { cva } from 'class-variance-authority';

const Label = ({
	children,
	validation,
	className,
	...props
}) => {
	const labelVariants = cva(
		'block text-sm font-medium transition-all duration-500',
		{
			variants: {
				validation: {
					default:
						'peer-focus:text-secondary-2 peer-focus:border peer-focus:border-secondary-2 peer-valid:text-secondary-2 peer-valid:border-secondary-2',
					success:
						'peer-focus:text-green-500 peer-focus:border peer-focus:border-green-500 peer-valid:text-green-500 peer-valid:border-green-500',
					error:
						'peer-focus:text-red-500 peer-focus:border peer-focus:border-red-500 peer-valid:text-red-500 peer-valid:border-red-500',
				},
			},
			defaultVariants: {
				validation: 'default',
			},
		},
	);

	return (
		<label
			className={cn(
				labelVariants({ validation, className }),
			)}
			{...props}>
			{children}
		</label>
	);
};

Label.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	validation: PropTypes.oneOf([
		'default',
		'success',
		'error',
	]),
};

export default Label;
