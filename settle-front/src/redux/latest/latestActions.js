import {
	LOAD_REQUEST_LATEST,
	SET_SUCCESS_LATEST,
	SET_ERROR_LATEST,
	LOAD_REQUEST_LATEST_BASE,
	SET_SUCCESS_LATEST_BASE,
	SET_ERROR_LATEST_BASE,
	LOAD_REQUEST_LATEST_BASE_SYMBOLS,
	SET_SUCCESS_LATEST_BASE_SYMBOLS,
	SET_ERROR_LATEST_BASE_SYMBOLS,
} from "./latestActionTypes";

export const getLatest = () => {
	const url = `${process.env.REACT_APP_BASE_URL}/latest`;
	return async (dispatch) => {
		dispatch({ type: LOAD_REQUEST_LATEST });
		try {
			const res = await fetch(url);
			const response = await res.json();
			if (res.status === 200 && response.success) {
				dispatch({
					type: SET_SUCCESS_LATEST,
					payload: response.rates,
				});
			} else {
				dispatch({ type: SET_ERROR_LATEST });
			}
		} catch (error) {
			dispatch({ type: SET_ERROR_LATEST });
		}
	};
};

export const getLatestByBase = (base) => {
	const url = `${process.env.REACT_APP_BASE_URL}/latest/${base}`;
	return async (dispatch) => {
		dispatch({ type: LOAD_REQUEST_LATEST_BASE });
		try {
			const res = await fetch(url);
			const response = await res.json();
			if (res.status === 200 && response.success) {
				dispatch({
					type: SET_SUCCESS_LATEST_BASE,
					payload: response.rates,
				});
			} else {
				dispatch({ type: SET_ERROR_LATEST_BASE });
			}
		} catch (error) {
			dispatch({ type: SET_ERROR_LATEST_BASE });
		}
	};
};

export const getCurrencyLatestByBase = (base, symbols) => {
	const url = `${process.env.REACT_APP_BASE_URL}/latest/${base}/${symbols}`;
	return async (dispatch) => {
		dispatch({ type: LOAD_REQUEST_LATEST_BASE_SYMBOLS });
		try {
			const res = await fetch(url);
			const response = await res.json();
			if (res.status === 200 && response.success) {
				dispatch({
					type: SET_SUCCESS_LATEST_BASE_SYMBOLS,
					payload: response.rates,
				});
			} else {
				dispatch({ type: SET_ERROR_LATEST_BASE_SYMBOLS });
			}
		} catch (error) {
			dispatch({ type: SET_ERROR_LATEST_BASE_SYMBOLS });
		}
	};
};
