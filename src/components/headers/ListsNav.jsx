import { dataListNav } from '../../static/dataListNav';
import { NavLink } from 'react-router-dom';
import Icon from '../elements/Icon';

const ListsNav = () => {
	return (
		<div className='flex items-center gap-2'>
			{dataListNav.map((list, idx) => (
				<NavLink to={list.path} end key={idx}>
					{({ isActive }) => (
						<div
							key={idx}
							className={`flex items-center gap-1 bg-gradient-radial p-1 rounded-xl hover:animate-pulse ${
								isActive ? ' shadow-wrapper' : ''
							}`}>
							<Icon className='text-sm md:text-lg'>
								{list.icon}
							</Icon>
							<h4 className='text-sm md:text-base text-gradient font-semibold'>
								{list.label}
							</h4>
						</div>
					)}
				</NavLink>
			))}
		</div>
	);
};

export default ListsNav;
