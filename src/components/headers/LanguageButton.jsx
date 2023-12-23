import { useLanguageContext } from '../../hooks/useContext';
import EN_LANGUAGE_IMG from '../../assets/img/en.png';
import ID_LANGUAGE_IMG from '../../assets/img/id.png';
import Button from '../elements/Button';
import { Tooltip } from 'react-tooltip';

const LanguageButton = () => {
	const { language, toggleLanguage } = useLanguageContext();
	return (
		<Button
			id='btn-language'
			className='p-0 w-6 h-6 md:w-8 md:h-8 bg-transparent hover:bg-transparent rounded-none'
			onClick={toggleLanguage}>
			<img
				className='w-full h-full object-cover'
				src={
					language === 'id'
						? ID_LANGUAGE_IMG
						: EN_LANGUAGE_IMG
				}
				alt='Language switching'
			/>
			<Tooltip
				style={{
					fontSize: '11px',
					padding: '5px 10px',
				}}
				anchorSelect='#btn-language'
				content={
					language === 'id'
						? 'Ganti bahasa'
						: 'Change Language'
				}
			/>
		</Button>
	);
};

export default LanguageButton;
