import SearchInput from './SearchInput';
import PropTypes from 'prop-types';
import Typography from '../elements/Typography';
import GoToCreateNote from './GoToCreateNote';

const HeaderContent = ({ text }) => {
	return (
		<div className='flex justify-between mobile-flex'>
			<Typography className='h3'>{text}</Typography>
			<div className='flex justify-center'>
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
