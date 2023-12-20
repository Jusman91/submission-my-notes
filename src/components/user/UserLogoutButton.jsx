import PropTypes from 'prop-types';
import ButtonWithIcon from '../fragments/ButtonWithIcon';
import { RiLogoutCircleRLine } from 'react-icons/ri';

const UserLogoutButton = ({ onClick }) => {
	return (
		<ButtonWithIcon
			icon={<RiLogoutCircleRLine />}
			anchorSelectTooltip='btn-logout-user'
			tooltip='Logout'
			onClick={onClick}
		/>
	);
};

UserLogoutButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default UserLogoutButton;
