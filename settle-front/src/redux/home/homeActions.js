import {
	LOAD_REQUEST_SYMBOLS,
	SET_SUCCESS_SYMBOLS,
	SET_ERROR_SYMBOLS,
	SET_SELECTED_SYMBOL,
} from "./homeActionTypes";

export const getSymbols = () => {
	const url = `${process.env.REACT_APP_BASE_URL}/symbols`;
	return async (dispatch) => {
		dispatch({ type: LOAD_REQUEST_SYMBOLS });
		try {
			const res = await fetch(url);
			const response = await res.json();
			if (res.status === 200 && response.success) {
				dispatch({
					type: SET_SUCCESS_SYMBOLS,
					payload: response.symbols,
				});
			} else {
				dispatch({ type: SET_ERROR_SYMBOLS });
			}
		} catch (error) {
			dispatch({ type: SET_ERROR_SYMBOLS });
		}
	};
};

export const setSelectedSymbol = (data) => ({
	type: SET_SELECTED_SYMBOL,
	payload: data,
});
