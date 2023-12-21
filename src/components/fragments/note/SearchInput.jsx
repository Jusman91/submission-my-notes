import { CiSearch } from 'react-icons/ci';
import Input from '../../elements/Input';
import { useSearchParams } from 'react-router-dom';
import ButtonWithIcon from '../ButtonWithIcon';
import { useToggle } from '../../../hooks/useToggle';

const SearchInput = () => {
	const [activeClass, setActiveClass] = useToggle(false);
	const [searchParams, setSearchParams] = useSearchParams();

	const query = searchParams.get('keyword') || '';

	return (
		<div className='group flex items-center justify-center cursor-pointer'>
			<Input
				variant='default'
				type='text'
				placeholder='Cari judul catatan'
				className={`w-0 opacity-0 ${
					activeClass ? 'w-60 opacity-100' : ''
				}`}
				onChange={(e) =>
					setSearchParams({ keyword: e.target.value })
				}
				value={query}
			/>
			<ButtonWithIcon
				icon={<CiSearch />}
				anchorSelectTooltip='i-search'
				tooltip='Search'
				onClick={setActiveClass}
			/>
		</div>
	);
};

export default SearchInput;
