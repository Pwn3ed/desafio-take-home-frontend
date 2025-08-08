
type SearchBarProps = {
    value: string;
    onChange: (value: string) => void;
};

const SearchBar = ({ value, onChange }: SearchBarProps) => {
    return (
        <div className="flex gap-2">
            <input
                type="text"
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder="Search by name..."
                className="px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <button
                type="button"
                className="px-4 py-2 rounded bg-emerald-600 text-white hover:bg-emerald-700 transition-colors"
                onClick={() => onChange(value)}
            >
                Search
            </button>
        </div>
    );
};

export default SearchBar;