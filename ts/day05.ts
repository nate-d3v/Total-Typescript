//Assigning Types to Variables
interface User {
	id: number;
	firstName: string;
	lastName: string;
	isAdmin: boolean;
}

const defaultUser: User = {
	id: 1,
	firstName: 'Nathan',
	lastName: 'Schmidt',
	isAdmin: false,
};

const getUserId = (user: User) => {
	return user.id;
};
