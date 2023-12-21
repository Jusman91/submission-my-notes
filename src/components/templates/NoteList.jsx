import PropTypes from 'prop-types';
import { HeaderContent } from '../fragments';
import CardNotes from '../card/CardNotes';
import NoContent from '../fragments/NoContent';
import { useSearchParams } from 'react-router-dom';
import { filteredData } from '../../utils/service/globalService';
import useDebounce from '../../hooks/useDebounce';

const NoteList = ({ text, notes }) => {
	const [searchParams] = useSearchParams();
	const query = searchParams.get('keyword') || '';
	const debounceQuery = useDebounce(query, 500);
	const filterNotes = filteredData(notes, debounceQuery);

	return (
		<section>
			<HeaderContent text={text} />
			{filterNotes?.length > 0 ? (
				<div className='grid grid-cols-1 gap-4 py-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
					{filterNotes?.map((note) => (
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
