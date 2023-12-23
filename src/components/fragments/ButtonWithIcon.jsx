import PropTypes from 'prop-types';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import { Tooltip } from 'react-tooltip';

const ButtonWithIcon = ({
	anchorSelectTooltip,
	onClick,
	icon,
	tooltip,
}) => {
	return (
		<div className='group'>
			<Button
				id={anchorSelectTooltip}
				className='rounded-full p-0 w-6 h-6 md:w-8 md:h-8 dark:shadow-wrapper group-hover:animate-bounce'
				onClick={onClick}>
				<Icon className='text-sm md:text-lg text-white'>
					{icon}
				</Icon>
				{tooltip && (
					<Tooltip
						style={{
							fontSize: '11px',
							padding: '5px 10px',
						}}
						anchorSelect={`#${anchorSelectTooltip}`}
						content={tooltip}
					/>
				)}
			</Button>
		</div>
	);
};

ButtonWithIcon.propTypes = {
	anchorSelectTooltip: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
	]).isRequired,
	tooltip: PropTypes.string,
};

export default ButtonWithIcon;
