import React, { useEffect, useState } from "react";
import { Symbol } from "../../components/symbol/symbol";
import { useSelector } from "react-redux";
import { InputSearch } from "../../components/inputSearch/inputSearch";
import { getCoincidences } from "../../functions/symbols";
import "./symbols.css";
import { LoadingProcedure } from "../../components/loadingProcedure/loadingProcedure";

export const Symbols = () => {
	const state = useSelector((state) => state);
	const { loadingSymbols, errorSymbols, symbols } = state;

	const [search, setSearch] = useState({ country: "" });
	const [searchSymbols, setSearchSymbols] = useState(null);

	const onChange = (e) =>
		setSearch({ ...search, [e.target.name]: e.target.value });

	useEffect(() => {
		const { country } = search;
		const result = getCoincidences(country, symbols, "currency", "description");
		setSearchSymbols(result);
	}, [search]);

	useEffect(() => {
		if (symbols) {
			setSearchSymbols(symbols);
		}
	}, [symbols]);

	if (loadingSymbols) {
		return <LoadingProcedure />;
	} else if (errorSymbols) {
		return <div>...No Data Available</div>;
	} else {
		return (
			<div className="symbols--main--container">
				<div className="symbols--main--container--input">
					<InputSearch
						type="text"
						name={"country"}
						onChange={onChange}
						value={search.country}
						placeholder={"Input Country"}
					/>
				</div>
				<div className="symbols--main--container--list">
					{searchSymbols &&
						searchSymbols.map((symbol) => {
							return <Symbol key={symbol.currency} symbol={symbol} />;
						})}
				</div>
			</div>
		);
	}
};
