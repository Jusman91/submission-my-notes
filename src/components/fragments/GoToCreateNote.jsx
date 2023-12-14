import { Link } from 'react-router-dom';
import CustomButton from './CustomButton';
import { MdOutlineNoteAdd } from 'react-icons/md';

const GoToCreateNote = () => {
	return (
		<Link to={`/notes/new`}>
			<CustomButton
				className='btn-circle wrapper'
				icon={<MdOutlineNoteAdd />}
				anchorSelectTooltip='btn-go-to-create-note'
				tooltip='Create'
			/>
		</Link>
	);
};

export default GoToCreateNote;
