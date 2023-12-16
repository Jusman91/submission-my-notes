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
		<Button
			id={anchorSelectTooltip}
			className='rounded-full w-8 h-8 shadow-wrapper group-hover:animate-bounce'
			onClick={onClick}>
			<Icon className='text-base md:text-lg'>{icon}</Icon>
			{tooltip && (
				<Tooltip
					anchorSelect={`#${anchorSelectTooltip}`}
					content={tooltip}
				/>
			)}
		</Button>
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
