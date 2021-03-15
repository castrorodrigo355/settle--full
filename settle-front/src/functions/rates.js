export const headerColumns = [
	{ id: 0, field: "PAIR" },
	{ id: 1, field: "RATE" },
	{ id: 2, field: "FEE" },
	{ id: 3, field: "AMOUNT" },
	{ id: 4, field: "APPLIED" },
];

export const mapInitRow = (rowData) => {
	const list = Object.values(rowData);
	const length = list.length;
	const array = list.filter((x, i) => i > 0 && i < length - 1);
	return array;
};
