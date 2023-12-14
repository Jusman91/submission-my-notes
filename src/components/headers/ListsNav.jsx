import { dataListNav } from '../../static/dataListNav';
import { NavLink } from 'react-router-dom';
import { CustomButton } from '../fragments';

const ListsNav = () => {
	return (
		<div className='flex'>
			{dataListNav.map((list, idx) => (
				<NavLink to={list.path} end key={idx}>
					{({ isActive }) => (
						<CustomButton
							className={`btn-archives ${
								isActive ? 'wrapper' : ''
							}`}
							icon={list.icon}
							typography={list.label}
						/>
					)}
				</NavLink>
			))}
		</div>
	);
};

export default ListsNav;
