import PropTypes from 'prop-types';
import { HeaderContent } from '../fragments';
import CardNotes from '../card/CardNotes';
import NoContent from '../fragments/NoContent';
import { useSearchParams } from 'react-router-dom';
import useDebounce from '../../hooks/useDebounce';
import { filteredData } from '../../utils/globalService';

const NoteList = ({ text, notes }) => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('keyword') || '';
	const debounceQuery = useDebounce(query, 500);
	const filteredNotes = filteredData(notes, debounceQuery);

	return (
		<section>
			<HeaderContent text={text} />
			{filteredNotes?.length > 0 ? (
				<div className='list_notes'>
					{filteredNotes?.map((note) => (
						<CardNotes key={note.id} data={note} />
					))}
				</div>
			) : (
				<NoContent text='Catatan kosong' />
			)}
		</section>
	);
};

NoteList.propTypes = {
	text: PropTypes.string.isRequired,
	notes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default NoteList;
