import { useEffect, useState } from "react";
import type { User, UseUsersResult } from "../types/types";

export const useUsers = (): UseUsersResult => {
	const [users, setUsers] = useState<User[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [searchTerm, setSearchTerm] = useState<string>('');

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/users');

				if (!response.ok) {
					throw new Error(`HTTP error! status: ${response.status}`);
				}

				const data: User[] = await response.json();
				setUsers(data);
				setFilteredUsers(data);
				setError(null);
			} catch (err) {
				setError(err instanceof Error ? err.message : 'An unknown error occurred');
				setUsers([]);
				setFilteredUsers([]);
			} finally {
				setIsLoading(false);
			}
		};

		fetchUsers();
	}, []);

	useEffect(() => {
		if (searchTerm.trim() === '') {
			setFilteredUsers(users);
		} else {
			const filtered = users.filter(user =>
				user.name.toLowerCase().includes(searchTerm.toLowerCase())
			);
			setFilteredUsers(filtered);
		}
	}, [searchTerm, users]);

	return {
		users,
		filteredUsers,
		isLoading,
		error,
		searchTerm,
		setSearchTerm,
	};
}


