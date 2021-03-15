import React from "react";
import "./symbolOption.css";

export const SymbolOption = ({ symbol, selectOption }) => {
	const handleSymbolOption = () => selectOption(symbol.currency);
	return (
		<div
			className="symbol--option--main--container"
			onClick={handleSymbolOption}
		>
			<div>{symbol.currency}</div>
		</div>
	);
};
