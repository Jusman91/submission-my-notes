import PropTypes from 'prop-types';
import { cn } from '../../utils/service/globalService';
import { cva } from 'class-variance-authority';

const Icon = ({
	children,
	className,
	validation,
	...props
}) => {
	const iconVariants = cva(
		'text-secondary-2 text-2xl flex items-center justify-center',
		{
			variants: {
				validation: {
					default:
						'text-secondary-2 text-2xl flex items-center justify-center',
					success: 'text-green-700',
					error: 'text-red-700',
				},
			},
			defaultVariants: {
				validation: 'default',
			},
		},
	);
	return (
		<div
			{...props}
			className={cn(
				iconVariants({ validation, className }),
			)}>
			{children}
		</div>
	);
};

Icon.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	validation: PropTypes.oneOf([
		'default',
		'success',
		'error',
	]),
};

export default Icon;
