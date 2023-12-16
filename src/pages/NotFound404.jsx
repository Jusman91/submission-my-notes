import { NoContent } from '../components/fragments';

const NotFound404 = () => {
	return (
		<section className='grid place-items-center min-h-screen'>
			<NoContent text='404 Not Found' />
		</section>
	);
};

export default NotFound404;
