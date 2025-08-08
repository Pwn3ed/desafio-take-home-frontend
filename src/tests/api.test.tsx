import { describe, it, expect, vi, beforeEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { useUsers } from '../hooks/useUsers';

describe('useUsers', () => {
	beforeEach(() => {
		vi.restoreAllMocks();
	});

	it('deve chamar a API corretamente', async () => {
		const mockResponse = [
			{ id: 1, name: 'User 1', username: 'user1', email: 'user1@email.com' },
		];
		window.fetch = vi.fn().mockResolvedValue({
			ok: true,
			json: async () => mockResponse,
		});

		const { result } = renderHook(() => useUsers());

		await waitFor(() => {
			expect(result.current.isLoading).toBe(false);
		});

		expect(window.fetch).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/users');
		expect(result.current.users).toEqual(mockResponse);
		expect(result.current.error).toBeNull();
	});
});
