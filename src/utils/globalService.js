import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs) {
	return twMerge(clsx(inputs));
}

export function getInitialName(name) {
	const nameParts = name?.split(' ');
	return nameParts
		.map((part) => part.charAt(0))
		.join('')
		.toUpperCase();
}

export function filteredData(data, query) {
	const filterData = data.filter((note) =>
		note.title.toLowerCase().includes(query.toLowerCase()),
	);

	return filterData;
}

export function formateDate(date) {
	const options = {
		weekday: 'long',
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	};

	return new Date(date).toLocaleDateString(
		'id-ID',
		options,
	);
}
