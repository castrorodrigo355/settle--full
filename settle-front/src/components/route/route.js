import React from "react";
import { useHistory } from "react-router-dom";
import "./route.css";

export const Route = ({ route }) => {
	const history = useHistory();
	const { url, description } = route;

	const routeToClick = () => history.push(url);

	return (
		<div className="route--main--container" onClick={routeToClick}>
			{description}
		</div>
	);
};
