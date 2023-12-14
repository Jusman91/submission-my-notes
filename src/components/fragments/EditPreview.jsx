import PropTypes from 'prop-types';
import Typography from '../elements/Typography';
import '../../styles/preview.css';

const EditPreview = ({ title, body }) => {
	return (
		<div className='edit-preview'>
			<Typography className='h3 title-preview'>
				Preview
			</Typography>
			<Typography className='h4'>{title}</Typography>
			<p dangerouslySetInnerHTML={{ __html: body }} />
		</div>
	);
};

EditPreview.propTypes = {
	title: PropTypes.string.isRequired,
	body: PropTypes.string.isRequired,
};

export default EditPreview;
