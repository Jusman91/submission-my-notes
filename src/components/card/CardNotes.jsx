import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formateDate } from '../../utils/service/globalService';
import { useLanguageContext } from '../../hooks/useContext';

const CardNotes = ({ data }) => {
	const { language } = useLanguageContext();
	const { title, body, id } = data ?? {};
	const createdAt = formateDate(data?.createdAt, language);

	return (
		<Link
			to={`/notes/${id}`}
			className='p-4 rounded-xl bg-bkg-2 text-white hover:bg-gradient-radial shadow-slate-900 shadow-md dark:shadow-wrapper'>
			<h3 className='text-base md:text-xl font-semibold'>
				{title}
			</h3>
			<small className='opacity-40'>{createdAt}</small>
			<p
				className='line-clamp-6 pt-1'
				dangerouslySetInnerHTML={{ __html: body }}
			/>
		</Link>
	);
};

CardNotes.propTypes = {
	data: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string.isRequired,
		createdAt: PropTypes.string.isRequired,
		body: PropTypes.string.isRequired,
	}),
};

export default CardNotes;
