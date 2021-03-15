export const getSelectedOptions = (selectedOptions) => {
	const selectedLength = selectedOptions.length;
	let selectedSymbols = "";
	for (let i = 0; i < selectedLength; i++) {
		if (i === 0 || i === selectedLength) {
			selectedSymbols += `${selectedOptions[i]}`;
		} else {
			selectedSymbols += `,${selectedOptions[i]}`;
		}
	}
	return selectedSymbols;
};

const coincidence = (a, b) => a === b;

export const removeOption = (currency, selectedOptions) => {
	const result = selectedOptions.filter((so) => !coincidence(so, currency));
	return result;
};

export const chooseOption = (currency, selectedOptions) => {
	let result;
	const found = selectedOptions.some((so) => coincidence(so, currency));
	if (found) {
		result = removeOption(currency, selectedOptions);
	} else {
		result = [...selectedOptions, currency];
	}
	return result;
};
