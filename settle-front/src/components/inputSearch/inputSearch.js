import React from "react";
import "./inputSearch.css";

export const InputSearch = ({ type, name, onChange, value, placeholder }) => {
	return (
		<div className="input--search--main--container">
			<textarea
				type={type}
				name={name}
				onChange={onChange}
				value={value}
				placeholder={placeholder}
			/>
		</div>
	);
};
