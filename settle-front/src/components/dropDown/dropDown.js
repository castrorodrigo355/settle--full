import React, { useState, useEffect } from "react";
import "./dropDown.css";

export const DropDown = ({ title, options, selectCoin, selectedCoin }) => {
	const [open, setOpen] = useState(false);

	const clickDropDown = () => setOpen((x) => !x);

	useEffect(() => {
		setOpen(false);
	}, [selectCoin]);

	return (
		<div className="dropdown--main--container" onClick={clickDropDown}>
			<div className="dropdown--main--container--selection">
				{selectedCoin || title}
			</div>
			<div
				className={`dropdown--main--container--options ${
					open ? "open--options" : ""
				}`}
			>
				{options.map((option) => {
					return (
						<div
							key={option}
							className="dropdown--main--container--options--item"
							onClick={() => selectCoin(option)}
						>
							{option}
						</div>
					);
				})}
			</div>
		</div>
	);
};
