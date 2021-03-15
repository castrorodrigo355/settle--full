import React from "react";
import trashIcon from "../../icons/trash--icon.png";
import "./selectedOption.css";

export const SelectedOption = ({ so, removeSelectedOption }) => {
	return (
		<div className="options--main--container--selections--selected--item">
			<div className="options--main--container--selections--selected--item--text">
				{so}
			</div>
			<div
				className="options--main--container--selections--selected--item--icon"
				onClick={() => removeSelectedOption(so)}
			>
				<img src={trashIcon} alt="..." />
			</div>
		</div>
	);
};
