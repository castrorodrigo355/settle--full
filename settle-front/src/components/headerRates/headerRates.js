import React from "react";
import { routes } from "../../functions/header";
import { Route } from "../route/route";
import "./headerRates.css";

export const HeaderRates = () => {
	return (
		<div className="header--rates--main--container">
			<div className="header--rates--main--container--title">SETTLE</div>
			<div className="header--rates--main--container--options">
				{routes.map((route) => (
					<Route key={route.id} route={route} />
				))}
			</div>
		</div>
	);
};
