import PropTypes from 'prop-types';
import { NoContent } from '../components/fragments';

const NotFound404 = ({ error }) => {
	const textError = error?.response?.statusText
		? error?.response?.statusText
		: error?.message || '404 Not Found';
	return (
		<section className='text-2xl mt-48'>
			<NoContent text={textError} />
		</section>
	);
};

NotFound404.propTypes = {
	error: PropTypes.shape({
		message: PropTypes.string,
		response: PropTypes.shape({
			statusText: PropTypes.string,
		}),
	}),
};

export default NotFound404;
