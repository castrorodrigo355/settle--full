import React, { useState, useEffect } from "react";
import { SymbolOption } from "../../components/symbolOption/symbolOption";
import { CustomButton } from "../../components/customButton/customButton";
import { SelectedOption } from "../../components/selectedOption/selectedOption";
import { RateBaseBySymbol } from "../../components/rateBaseBySymbol/rateBaseBySymbol";
import { LoadingProcedure } from "../../components/loadingProcedure/loadingProcedure";
import { useSelector, useDispatch } from "react-redux";
import {
	getCurrencyLatestByBase,
	getLatestByBase,
} from "../../redux/latest/latestActions";
import {
	getSelectedOptions,
	chooseOption,
	removeOption,
} from "../../functions/options";
import "./options.css";

export const Options = ({ match }) => {
	const paramCurrency = match.params.currency;
	const state = useSelector((state) => state);
	const { loadingRatesBaseSymbols, symbols, ratesBaseSymbols } = state;
	const dispatch = useDispatch();

	const [selectedOptions, setSselectedOptions] = useState([]);

	const selectOption = (currency) => {
		const choosen = chooseOption(currency, selectedOptions);
		setSselectedOptions(choosen);
	};

	const removeSelectedOption = (option) => {
		const options = removeOption(option, selectedOptions);
		setSselectedOptions(options);
	};

	const clickOption = () => {
		const selectedSymbols = getSelectedOptions(selectedOptions);
		dispatch(getCurrencyLatestByBase(paramCurrency, selectedSymbols));
	};

	useEffect(() => {
		dispatch(getLatestByBase(paramCurrency));
		return () => setSselectedOptions([]);
	}, []);

	return (
		<div className="options--main--container">
			<div className="options--main--container--base">{paramCurrency}</div>
			<div className="options--main--container--list">
				{symbols &&
					symbols.map((symbol) => {
						return (
							<SymbolOption
								key={symbol.currency}
								symbol={symbol}
								selectOption={selectOption}
							/>
						);
					})}
			</div>
			<div className="options--main--container--selections">
				<div className="options--main--container--selections--selected">
					{selectedOptions.map((so) => (
						<SelectedOption
							key={so}
							so={so}
							removeSelectedOption={removeSelectedOption}
						/>
					))}
				</div>
				<div className="options--main--container--selections--button">
					<CustomButton
						type="button"
						disabled={selectedOptions.length === 0}
						onClick={clickOption}
					>
						Aceptar
					</CustomButton>
				</div>
			</div>
			<div className="options--main--container--results">
				{loadingRatesBaseSymbols ? (
					<LoadingProcedure />
				) : ratesBaseSymbols ? (
					ratesBaseSymbols.map((rate) => (
						<RateBaseBySymbol key={rate.currency} rate={rate} />
					))
				) : (
					`No Available data for ${paramCurrency}`
				)}
			</div>
		</div>
	);
};
