import { useEffect, useState } from "react";

export const useFetch = (url) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [data, setData] = useState(null);

	const fetchData = async () => {
		setLoading(true);
		try {
			const res = await fetch(url);
			const response = await res.json();
			if (res.status === 200) {
				setData(response);
			}
		} catch (error) {
			setError(true);
		}
		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, [url]);

	useEffect(() => {
		return () => {
			setLoading(false);
			setError(false);
			setData(null);
		};
	}, []);

	return { loading, error, data };
};
