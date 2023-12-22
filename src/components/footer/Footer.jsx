import { useLanguageContext } from '../../hooks/useContext';

const Footer = () => {
	const { language } = useLanguageContext();
	return (
		<section className='flex items-center justify-center p-4 dark:shadow-footer'>
			<h6 className='text-xs md:text-sm font-semibold'>
				&copy;2023
				{` ${
					language === 'id' ? 'Catatan Saya' : 'My Notes'
				}`}
			</h6>
		</section>
	);
};

export default Footer;
