import React, { useEffect } from "react";
import { Rates } from "./views/rates/rates";
import { Pairs } from "./views/pairs/pairs";
import { Symbols } from "./views/symbols/symbols";
import { Options } from "./views/options/options";
import { getLatest } from "./redux/latest/latestActions";
import { getSymbols } from "./redux/home/homeActions";
import { HeaderRates } from "./components/headerRates/headerRates";
import { useDispatch } from "react-redux";
import { RatesCreation } from "./views/ratesCreation/ratesCreation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

export const App = () => {
	const dispatch = useDispatch();

	const setAvailableArea = () => {
		let vh = window.innerHeight * 0.01;
		document.documentElement.style.setProperty("--vh", `${vh}px`);
	};

	useEffect(() => {
		setAvailableArea();
		window.addEventListener("resize", setAvailableArea);
		return () => window.removeEventListener("resize", setAvailableArea);
	});

	useEffect(() => {
		dispatch(getSymbols());
		dispatch(getLatest());
	}, []);

	return (
		<div className="app--main--container">
			<Router>
				<div className="app--main--container--header">
					<HeaderRates />
				</div>
				<Switch>
					<Route path="/symbols/:currency" component={Options} />
					<Route path="/creation/:pair/:rate" component={RatesCreation} />
					<Route path="/pairs" component={Pairs} />
					<Route path="/rates" component={Rates} />
					<Route exact path="/" component={Symbols} />
				</Switch>
			</Router>
		</div>
	);
};
