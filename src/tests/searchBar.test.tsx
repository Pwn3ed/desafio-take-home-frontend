
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SearchBar } from '../components/SearchBar';

describe('SearchBar', () => {
  it('deve atualizar o valor quando digitado', async () => {
    const mockOnChange = vi.fn();
    render(<SearchBar value="" onChange={mockOnChange} />);
    const input = screen.getByPlaceholderText('Search by name...');
    await userEvent.type(input, 'test');
    expect(mockOnChange).toHaveBeenCalledTimes(4);
  });

  it('deve chamar onChange ao clicar no botão Search', async () => {
    const mockOnChange = vi.fn();
    render(<SearchBar value="test" onChange={mockOnChange} />);
    const searchButton = screen.getByRole('button', { name: /search/i });
    await userEvent.click(searchButton);
    expect(mockOnChange).toHaveBeenCalledWith('test');
  });
});