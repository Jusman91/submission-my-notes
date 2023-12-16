import { Link } from 'react-router-dom';
import { MdOutlineNoteAdd } from 'react-icons/md';
import ButtonWithIcon from './ButtonWithIcon';

const GoToCreateNote = () => {
	return (
		<Link to={`/notes/new`} className='group'>
			<ButtonWithIcon
				icon={<MdOutlineNoteAdd />}
				anchorSelectTooltip='btn-go-to-create-note'
				tooltip='Create'
			/>
		</Link>
	);
};

export default GoToCreateNote;
