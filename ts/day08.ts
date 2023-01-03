//Function Return Type Annotations
interface User {
	id: number;
	firstName: string;
	lastName: string;
	role: 'admin' | 'user' | 'super-admin';
	posts: Array<Post>;
}

interface Post {
	id: number;
	title: string;
}

const makeUser = (): User => {
	return {
		id: 1,
		firstName: 'Matt',
		lastName: 'Pocock',
		role: 'admin',
		posts: [
			{
				id: 1,
				title: 'How I eat so much cheese',
			},
			{
				id: 2,
				title: "Why I don't eat more vegetables",
			},
		],
	};
};
