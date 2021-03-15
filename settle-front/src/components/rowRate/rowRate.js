import React, { useEffect, useState } from "react";
import { mapInitRow } from "../../functions/rates";
import "./rowRate.css";

export const RowRate = ({ rowRate }) => {
	const [list, setList] = useState(null);

	useEffect(() => {
		setList(mapInitRow(rowRate));
	}, [rowRate]);

	return (
		<div className="row--rate--main--container">
			{list &&
				list.map((value, index) => <RowField key={index} value={value} />)}
		</div>
	);
};

const RowField = ({ value }) => (
	<div className="row--rate--main--container--tiem">{value}</div>
);
