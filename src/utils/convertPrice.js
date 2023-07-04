const convertPrice = (amount) => {
	const formatter = new Intl.NumberFormat("fr-FR", {
		style: "currency",
		currency: "EUR",
		minimumFractionDigits: 0,
	});

	return formatter.format(amount);
};

export default convertPrice;
