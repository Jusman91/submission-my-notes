import { CiSearch } from 'react-icons/ci';
import Icon from '../elements/Icon';
import Input from '../elements/Input';
import { useToggle } from '../../hooks/useToggle';
import { useSearchParams } from 'react-router-dom';
import '../../styles/elements.css';
import { Tooltip } from 'react-tooltip';

const SearchInput = () => {
	const [activeClass, setActiveClass] = useToggle(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get('keyword') || '';

	return (
		<div className='flex justify-center'>
			<Input
				type='text'
				placeholder='Cari judul catatan'
				className={` search ${
					activeClass ? 'search-active' : ''
				}`}
				onChange={(e) =>
					setSearchParams({ keyword: e.target.value })
				}
				value={query}
			/>
			<Icon
				id='i-search'
				className='i-search'
				onClick={setActiveClass}>
				<CiSearch />
			</Icon>
			<Tooltip anchorSelect='#i-search' content='Search' />
		</div>
	);
};

export default SearchInput;
