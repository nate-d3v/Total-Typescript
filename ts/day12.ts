const coerceAmount = (amount: number | { amount: number }) => {
	return typeof amount === 'object' ? amount.amount : amount;
};
