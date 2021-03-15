const existenceData = (c, symbol, param1, param2) => {
	const country = c.toLowerCase();
	const a = symbol[param1].toLowerCase().includes(country);
	const b = symbol[param2].toLowerCase().includes(country);
	return a || b;
};

export const getCoincidences = (country, symbols, param1, param2) => {
	let result = symbols;
	if (country !== "") {
		result = symbols.filter((symbol) =>
			existenceData(country, symbol, param1, param2),
		);
	}
	return result;
};
