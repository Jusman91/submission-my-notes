import PropTypes from 'prop-types';
import Button from '../elements/Button';
import Icon from '../elements/Icon';
import { Tooltip } from 'react-tooltip';
import Typography from '../elements/Typography';

const CustomButton = ({
	anchorSelectTooltip,
	className,
	onClick,
	icon,
	typography,
	tooltip,
}) => {
	return (
		<Button
			id={anchorSelectTooltip}
			className={className}
			onClick={onClick}>
			{icon && <Icon>{icon}</Icon>}
			{typography && (
				<Typography className='h6 text-gradient'>
					{typography}
				</Typography>
			)}
			{tooltip && (
				<Tooltip
					anchorSelect={`#${anchorSelectTooltip}`}
					content={tooltip}
				/>
			)}
		</Button>
	);
};

CustomButton.propTypes = {
	className: PropTypes.string,
	anchorSelectTooltip: PropTypes.string,
	onClick: PropTypes.func,
	icon: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.element,
	]),
	typography: PropTypes.string,
	tooltip: PropTypes.string,
};

export default CustomButton;
