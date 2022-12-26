//Working with Object Params
interface Args {
	first: number;
	second: number;
}

export const addTwoNumbers = (params: Args) => {
	return params.first + params.second;
};
