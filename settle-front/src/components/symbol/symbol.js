import React from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSelectedSymbol } from "../../redux/home/homeActions";
import "./symbol.css";

export const Symbol = ({ symbol }) => {
	const history = useHistory();
	const dispatch = useDispatch();

	const handleCountry = () => {
		history.push(`/symbols/${symbol.currency}`);
		dispatch(setSelectedSymbol(symbol.currency));
	};

	return (
		<div className="symbol--main--container" onClick={handleCountry}>
			<div className="symbol--main--container--currency">{symbol.currency}</div>
			<div className="symbol--main--container--description">
				{symbol.description}
			</div>
		</div>
	);
};
