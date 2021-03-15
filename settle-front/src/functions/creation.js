export const createRequest = (data) => {
	const { pair, rate, fee } = data;
	const amount = parseInt(rate) + parseInt(fee / 100);
	const applied = parseInt(rate + amount);

	const body = {
		pair: pair,
		rate: parseInt(rate),
		fee: parseInt(fee),
		amount: amount,
		applied: applied,
	};
	return body;
};
