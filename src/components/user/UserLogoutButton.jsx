import PropTypes from 'prop-types';
import ButtonWithIcon from '../fragments/ButtonWithIcon';
import { RiLogoutCircleRLine } from 'react-icons/ri';
import { useLanguageContext } from '../../hooks/useContext';

const UserLogoutButton = ({ onClick }) => {
	const { language } = useLanguageContext();
	return (
		<ButtonWithIcon
			icon={<RiLogoutCircleRLine />}
			anchorSelectTooltip='btn-logout-user'
			tooltip={language === 'id' ? 'Keluar' : 'Logout'}
			onClick={onClick}
		/>
	);
};

UserLogoutButton.propTypes = {
	onClick: PropTypes.func.isRequired,
};

export default UserLogoutButton;
