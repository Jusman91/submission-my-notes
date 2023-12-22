import PropTypes from 'prop-types';
import { createContext, useMemo, useState } from 'react';

export const LanguageContext = createContext();

const LanguageContextProvider = ({ children }) => {
	const [language, setLanguage] = useState(
		localStorage.getItem('language') || 'id',
	);

	const toggleLanguage = () => {
		setLanguage((prev) => {
			const newLanguage = prev === 'id' ? 'en' : 'id';
			localStorage.setItem('language', newLanguage);
			return newLanguage;
		});
	};

	const value = useMemo(() => {
		return {
			language,
			toggleLanguage,
		};
	}, [language]);

	return (
		<LanguageContext.Provider value={value}>
			{children}
		</LanguageContext.Provider>
	);
};

LanguageContextProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export default LanguageContextProvider;
