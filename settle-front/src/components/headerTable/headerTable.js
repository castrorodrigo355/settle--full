import React from "react";
import { headerColumns } from "../../functions/rates";
import "./headerTable.css";

export const HeaderTable = () => {
	return (
		<div className="header--table--main--container">
			{headerColumns.map((field) => (
				<Field key={field.id} data={field} />
			))}
		</div>
	);
};

const Field = ({ data }) => (
	<div className="field--main--container">{data.field}</div>
);
