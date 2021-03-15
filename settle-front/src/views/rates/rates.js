import React from "react";
import { RowRate } from "../../components/rowRate/rowRate";
import { useFetch } from "../../customHooks/useFetch";
import { HeaderTable } from "../../components/headerTable/headerTable";
import { LoadingProcedure } from "../../components/loadingProcedure/loadingProcedure";
import "./rates.css";

export const Rates = () => {
	const url = `${process.env.REACT_APP_BASE_URL}/rates`;
	let { loading, error, data } = useFetch(url);

	if (loading) {
		return <LoadingProcedure />;
	} else if (error) {
		return <div>...No Data Available</div>;
	} else {
		return (
			<div className="rates--main--container">
				<HeaderTable />
				<div className="rates--main--container--list">
					{data &&
						data.map((rate) => <RowRate key={rate._id} rowRate={rate} />)}
				</div>
			</div>
		);
	}
};
