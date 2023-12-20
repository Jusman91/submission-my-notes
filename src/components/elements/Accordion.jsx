import PropTypes from 'prop-types';
import { cn } from '../../utils/globalService';

const Accordion = ({
	children,
	className,
	open,
	...props
}) => {
	return (
		<div
			{...props}
			className={cn(
				`grid transition-[grid-template-rows,opacity] duration-300 ${
					open
						? 'grid-rows-[1fr] opacity-100'
						: 'grid-rows-[0fr] opacity-0'
				}`,
				className,
			)}>
			<div className='overflow-hidden'>{children}</div>
		</div>
	);
};

Accordion.propTypes = {
	children: PropTypes.node.isRequired,
	className: PropTypes.string,
	open: PropTypes.bool.isRequired,
};

export default Accordion;
