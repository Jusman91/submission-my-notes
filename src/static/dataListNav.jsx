import { FaFileArchive } from 'react-icons/fa';
import { MdNote } from 'react-icons/md';

export const dataListNav = [
	{
		label: 'All notes',
		path: '/notes',
		icon: <MdNote />,
	},
	{
		label: 'Arsip',
		path: '/notes/archives',
		icon: <FaFileArchive />,
	},
];
