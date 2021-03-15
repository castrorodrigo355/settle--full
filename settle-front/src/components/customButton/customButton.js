import React from "react";
import "./customButton.css";

export const CustomButton = ({ type, disabled, onClick, children }) => {
	return (
		<button
			type={type}
			disabled={disabled}
			className="custom--button--main--container"
			onClick={onClick}
		>
			{children}
		</button>
	);
};
