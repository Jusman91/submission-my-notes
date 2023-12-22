import { IoMoon, IoSunny } from 'react-icons/io5';
import { ButtonWithIcon } from '../fragments';
import {
	useLanguageContext,
	useThemeContext,
} from '../../hooks/useContext';

const ThemeButton = () => {
	const { theme, toggleTheme } = useThemeContext();
	const { language } = useLanguageContext();
	const lightMode =
		language === 'id' ? 'Mode terang' : 'Light mode';
	const darkMode =
		language === 'id' ? 'Mode gelap' : 'Dark mode';
	return (
		<ButtonWithIcon
			icon={theme === 'dark' ? <IoSunny /> : <IoMoon />}
			anchorSelectTooltip='btn-theme'
			tooltip={theme === 'dark' ? lightMode : darkMode}
			onClick={toggleTheme}
		/>
	);
};

export default ThemeButton;
