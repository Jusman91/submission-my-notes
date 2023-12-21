import { useEffect } from 'react';
import { useState } from 'react';
import API from '../api/axiosInstance';

const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		let isMounted = true;
		const fetchData = async () => {
			setLoading(true);
			try {
				const { data } = await API.get(url);
				setData(data.data);
				setError(null);
			} catch (err) {
				if (isMounted) {
					setError(err);
				}
			}
			if (isMounted) {
				setLoading(false);
			}
		};

		fetchData();

		return () => {
			isMounted = false;
		};
	}, [url]);

	const reFetch = async () => {
		setLoading(true);
		try {
			const { data } = await API.get(url);
			setData(data.data);
			setError(null);
		} catch (err) {
			setError(err);
		}
		setLoading(false);
	};

	return { data, loading, error, reFetch };
};

export default useFetch;
