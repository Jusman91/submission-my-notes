import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Typography from '../elements/Typography';
import { formateDate } from '../../utils/globalService';
import '../../styles/cards.css';

const CardNotes = ({ data }) => {
	const { title, body, id } = data || {};
	const createdAt = formateDate(data?.createdAt);

	return (
		<Link to={`/notes/${id}`} className='wrapper card'>
			<Typography className='h4'>{title}</Typography>
			<small>{createdAt}</small>
			<p dangerouslySetInnerHTML={{ __html: body }} />
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
