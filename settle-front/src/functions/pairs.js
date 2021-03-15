export const fromList = ["EUR", "USD", "BRL"];
export const toList = ["USD", "ARS", "BRL"];

const desiredPair = (rate, to) => rate.currency === to;

const getEurConvertion = (rates, currency) => {
	const convertion = rates.find((r) => r.currency === currency);
	const result = convertion.value;
	return result;
};

export const getRatePairs = (rates, from, to) => {
	let final;
	if (from === "EUR") {
		const result = rates.find((rate) => desiredPair(rate, to)).value;
		final = result;
	} else {
		const valFrom = getEurConvertion(rates, from);
		const valTo = getEurConvertion(rates, to);
		final = valTo / valFrom;
	}
	return final;
};
