import React from "react";
import "./inputForm.css";

export const InputForm = ({
	label,
	disabled,
	type,
	name,
	onChange,
	value,
	placeholder,
}) => {
	return (
		<div className="input--form--main--container">
			<div className="input--form--main--container--mask" />
			<div className="input--form--main--container--title">{label}</div>
			<input
				disabled={disabled}
				type={type}
				name={name}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
};
