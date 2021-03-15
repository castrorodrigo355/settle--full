import React from "react";
import "./rateBaseBySymbol.css";

export const RateBaseBySymbol = ({ rate }) => {
	const { currency, value } = rate;
	return (
		<div className="rate--base--symbol--container">
			<div className="rate--base--symbol--container--currency">{currency}</div>
			<div className="rate--base--symbol--container--value">{value}</div>
		</div>
	);
};
