
export type User = {
	id: number;
	name: string;
	email: string;
	address: {
		city: string;
	}
}

export type UseUsersResult = {
	users: User[];
	filteredUsers: User[];
	isLoading: boolean;
	error: string | null;
	searchTerm: string;
	setSearchTerm: (term: string) => void;
}

