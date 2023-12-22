import PropTypes from 'prop-types';
import {
	createContext,
	useEffect,
	useMemo,
	useState,
} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = ({ children }) => {
	const [theme, setTheme] = useState(
		localStorage.getItem('theme') || 'light',
	);

	const toggleTheme = () => {
		setTheme((prev) => {
			const newTheme = prev === 'dark' ? 'light' : 'dark';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		});
	};

	useEffect(() => {
		if (theme === 'dark')
			document.documentElement.setAttribute(
				'data-theme',
				'dark',
			);
		else
			document.documentElement.removeAttribute(
				'data-theme',
				'dark',
			);
	}, [theme]);

	const value = useMemo(() => {
		return {
			theme,
			toggleTheme,
		};
	}, [theme]);

	return (
		<ThemeContext.Provider value={value}>
			{children}
		</ThemeContext.Provider>
	);
};

ThemeContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default ThemeContextProvider;
