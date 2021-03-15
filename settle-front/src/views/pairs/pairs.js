import React, { useState, useEffect } from "react";
import { DropDown } from "../../components/dropDown/dropDown";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { CustomButton } from "../../components/customButton/customButton";
import { LoadingProcedure } from "../../components/loadingProcedure/loadingProcedure";
import { fromList, getRatePairs, toList } from "../../functions/pairs";
import "./pairs.css";

export const Pairs = () => {
	const state = useSelector((state) => state);
	const { loadingRates, errorRates, rates } = state;
	const history = useHistory();

	const [selectedFrom, setSelectedFrom] = useState(null);
	const [selectedTo, setSelectedTo] = useState(null);
	const [convertionResult, setConvertionResult] = useState(null);

	const selectCoinFrom = (option) => setSelectedFrom(option);

	const selectCoinTo = (option) => setSelectedTo(option);

	const disabledButton = !selectedFrom || !selectedTo;

	const convertionClick = () => {
		const result = getRatePairs(rates, selectedFrom, selectedTo);
		setConvertionResult(result);
	};

	const createRate = () => {
		const pair = selectedFrom + selectedTo;
		const rate = parseFloat(convertionResult).toFixed(3);
		history.push(`/creation/${pair}/${rate}`);
	};

	useEffect(() => {
		if (rates) {
			// getRatePairs(rates, selectedFrom, selectedTo);
		}
	}, [rates]);

	useEffect(() => {
		// setSelectedFrom("EUR");
		// setSelectedTo("USD");
	}, []);

	if (loadingRates) {
		return <LoadingProcedure />;
	} else if (errorRates) {
		return <div>...No Data Available</div>;
	} else {
		return (
			<div className="pairs--main--container">
				<div className="pairs--main--container--from--to">
					<div className="pairs--main--container--from--to--drop">
						<DropDown
							title="Select From"
							options={fromList}
							selectCoin={selectCoinFrom}
							selectedCoin={selectedFrom}
						/>
					</div>

					<div className="pairs--main--container--from--to--drop">
						<DropDown
							title="Select To"
							options={toList}
							selectCoin={selectCoinTo}
							selectedCoin={selectedTo}
						/>
					</div>
				</div>
				<div className="pairs--main--container--convertion">
					<CustomButton
						type="button"
						disabled={disabledButton}
						onClick={convertionClick}
					>
						CONVERT
					</CustomButton>
				</div>
				<div className="pairs--main--container--result">
					{convertionResult || "..."}
				</div>
				<div className="pairs--main--container--create">
					<CustomButton
						type="button"
						disabled={disabledButton}
						onClick={createRate}
					>
						CREATE RATE
					</CustomButton>
				</div>
			</div>
		);
	}
};
