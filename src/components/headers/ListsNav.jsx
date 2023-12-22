import {
	dataListNavEn,
	dataListNavIn,
} from '../../static/dataListNav';
import { NavLink } from 'react-router-dom';
import Icon from '../elements/Icon';
import UserMenu from '../user/UserMenu';
import ThemeButton from './ThemeButton';
import LanguageButton from './LanguageButton';
import { useLanguageContext } from '../../hooks/useContext';

const ListsNav = () => {
	const { language } = useLanguageContext();
	const data =
		language === 'id' ? dataListNavIn : dataListNavEn;
	return (
		<div className='flex items-center gap-2'>
			{data.map((list, idx) => (
				<NavLink to={list.path} end key={idx}>
					{({ isActive }) => (
						<div
							key={idx}
							className={`flex items-center gap-1 dark:bg-gradient-radial p-1 rounded-xl hover:animate-pulse ${
								isActive ? 'dark:shadow-wrapper' : ''
							}`}>
							<Icon className='text-sm md:text-lg text-content'>
								{list.icon}
							</Icon>
							<h4 className='text-sm md:text-base text-content font-semibold'>
								{list.label}
							</h4>
						</div>
					)}
				</NavLink>
			))}
			<LanguageButton />
			<ThemeButton />
			<UserMenu />
		</div>
	);
};

export default ListsNav;
