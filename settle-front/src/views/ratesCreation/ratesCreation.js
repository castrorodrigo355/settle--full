import React, { useState } from "react";
import { InputForm } from "../../components/inputForm/inputForm";
import { useHistory } from "react-router-dom";
import { CustomButton } from "../../components/customButton/customButton";
import { createRequest } from "../../functions/creation";
import { LoadingProcedure } from "../../components/loadingProcedure/loadingProcedure";
import "./ratesCreation.css";

export const RatesCreation = ({ match }) => {
	const history = useHistory();

	const [loadingCreate, setLoadingCreate] = useState(false);
	const [data, setData] = useState({
		pair: match.params.pair,
		rate: match.params.rate,
		fee: "",
	});

	const onChange = (e) => setData({ ...data, [e.target.name]: e.target.value });

	const onClickCreation = async () => {
		setLoadingCreate(true);
		const jsonPost = createRequest(data);
		const url = `${process.env.REACT_APP_BASE_URL}/rates`;
		try {
			const res = await fetch(url, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
				method: "POST",
				body: JSON.stringify(jsonPost),
			});
			const response = await res.json();
			let route = `/`;
			if (res.status === 201) {
				route = `/rates`;
			}
			history.push(route);
		} catch (error) {
			console.log("ERROR: ", error);
		}
		setLoadingCreate(false);
	};

	if (loadingCreate) {
		return <LoadingProcedure />;
	} else {
		return (
			<div className="rates--creation--main--container">
				<div className="rates--creation--main--container--field">
					<InputForm
						label={"PAIR"}
						type={"text"}
						name={"pair"}
						onChange={onChange}
						value={data.pair}
						placeholder={"Pair"}
						disabled={true}
					/>
				</div>
				<div className="rates--creation--main--container--field">
					<InputForm
						label={"RATE"}
						type={"text"}
						name={"rate"}
						onChange={onChange}
						value={data.rate}
						placeholder={"Input Rate"}
						disabled={true}
					/>
				</div>
				<div className="rates--creation--main--container--field">
					<InputForm
						label={"FEE"}
						type={"number"}
						name={"fee"}
						onChange={onChange}
						value={data.fee}
						placeholder={"Input Fee"}
						disabled={false}
					/>
				</div>
				<div className="rates--creation--main--container--field">
					<CustomButton
						type="submit"
						disabled={data.fee === ""}
						onClick={onClickCreation}
					>
						CREATE
					</CustomButton>
				</div>
			</div>
		);
	}
};
