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
