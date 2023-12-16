import SearchInput from './SearchInput';
import PropTypes from 'prop-types';
import GoToCreateNote from './GoToCreateNote';

const HeaderContent = ({ text }) => {
	return (
		<div className='flex items-center justify-between mobile-flex'>
			<h3 className='text-lg md:text-xl font-bold'>
				{text}
			</h3>
			<div className='flex items-center justify-center gap-2'>
				<SearchInput />
				<GoToCreateNote />
			</div>
		</div>
	);
};

HeaderContent.propTypes = {
	text: PropTypes.string.isRequired,
};

export default HeaderContent;
