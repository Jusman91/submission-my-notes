import PropTypes from 'prop-types';
import { ClipLoader } from 'react-spinners';

const Loading = ({ loading, size }) => {
	return (
		<ClipLoader
			color='#a7a5a5'
			loading={loading && loading}
			size={size}
		/>
	);
};

Loading.propTypes = {
	loading: PropTypes.bool.isRequired,
	size: PropTypes.number,
};

export default Loading;
