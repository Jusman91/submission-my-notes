import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { ThemeContext } from '../contexts/ThemeContext';
import { LanguageContext } from '../contexts/LanguageContext';

const throwError = (context, message) => {
	if (!context) {
		throw Error(
			`use${message} must be used inside an ${message}Provider`,
		);
	}
};

export function useAuthContext() {
	const context = useContext(AuthContext);
	throwError(context, 'AuthContext');
	return context;
}

export function useThemeContext() {
	const context = useContext(ThemeContext);
	throwError(context, 'ThemeContext');
	return context;
}

export function useLanguageContext() {
	const context = useContext(LanguageContext);
	throwError(context, 'LanguageContext');
	return context;
}
