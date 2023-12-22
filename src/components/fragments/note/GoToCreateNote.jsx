import { Link } from 'react-router-dom';
import { MdOutlineNoteAdd } from 'react-icons/md';
import ButtonWithIcon from '../ButtonWithIcon';
import { useLanguageContext } from '../../../hooks/useContext';

const GoToCreateNote = () => {
	const { language } = useLanguageContext();
	return (
		<Link to={`/notes/new`} className='group'>
			<ButtonWithIcon
				icon={<MdOutlineNoteAdd />}
				anchorSelectTooltip='btn-go-to-create-note'
				tooltip={language === 'id' ? 'Buat' : 'Create'}
			/>
		</Link>
	);
};

export default GoToCreateNote;
