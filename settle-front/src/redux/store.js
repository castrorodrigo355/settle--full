import {
	LOAD_REQUEST_SYMBOLS,
	SET_SUCCESS_SYMBOLS,
	SET_ERROR_SYMBOLS,
	SET_SELECTED_SYMBOL,
} from "./home/homeActionTypes";

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
} from "./latest/latestActionTypes";

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const logger = (store) => (next) => (action) => {
	console.log("dispatching", action);
	let result = next(action);
	console.log("next state", store.getState());
	return result;
};

export const store = createStore(
	reducer,
	{
		loadingSymbols: false,
		errorSymbols: false,
		symbols: null,
		selectedSymbol: null,

		loadingRates: false,
		errorRates: false,
		rates: null,

		loadingRatesBase: false,
		errorRatesBase: false,
		ratesBase: null,

		loadingRatesBaseSymbols: false,
		errorRatesBaseSymbols: false,
		ratesBaseSymbols: null,
	},
	applyMiddleware(logger, thunk),
	//   window.devToolsExtension && window.devToolsExtension()
	// window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default function reducer(state, action) {
	switch (action.type) {
		case LOAD_REQUEST_LATEST_BASE_SYMBOLS:
			return {
				...state,
				loadingRatesBaseSymbols: true,
				errorRatesBaseSymbols: false,
				ratesBaseSymbols: null,
			};
		case SET_SUCCESS_LATEST_BASE_SYMBOLS:
			return {
				...state,
				loadingRatesBaseSymbols: false,
				errorRatesBaseSymbols: false,
				ratesBaseSymbols: action.payload,
			};
		case SET_ERROR_LATEST_BASE_SYMBOLS:
			return {
				...state,
				loadingRatesBaseSymbols: false,
				errorRatesBaseSymbols: true,
				ratesBaseSymbols: null,
			};
		/* ******************************** */
		case LOAD_REQUEST_LATEST_BASE:
			return {
				...state,
				loadingRatesBase: true,
				errorRatesBase: false,
				ratesBase: null,
			};
		case SET_SUCCESS_LATEST_BASE:
			return {
				...state,
				loadingRatesBase: false,
				errorRatesBase: false,
				ratesBase: action.payload,
			};
		case SET_ERROR_LATEST_BASE:
			return {
				...state,
				loadingRatesBase: false,
				errorRatesBase: true,
				ratesBase: null,
			};
		/* ******************************** */
		case LOAD_REQUEST_LATEST:
			return {
				...state,
				loadingRates: true,
				errorRates: false,
				rates: null,
			};
		case SET_SUCCESS_LATEST:
			return {
				...state,
				loadingRates: false,
				errorRates: false,
				rates: action.payload,
			};
		case SET_ERROR_LATEST:
			return {
				...state,
				loadingRates: false,
				errorRates: true,
				rates: null,
			};
		/* ******************************** */
		case SET_SELECTED_SYMBOL:
			return {
				...state,
				selectedSymbol: action.payload,
			};
		/* ******************************** */
		case LOAD_REQUEST_SYMBOLS:
			return {
				...state,
				loadingSymbols: true,
				errorSymbols: false,
				symbols: null,
			};
		case SET_SUCCESS_SYMBOLS:
			return {
				...state,
				loadingSymbols: false,
				errorSymbols: false,
				symbols: action.payload,
			};
		case SET_ERROR_SYMBOLS:
			return {
				...state,
				loadingSymbols: false,
				errorSymbols: true,
				symbols: null,
			};
		default:
			return state;
	}
}
