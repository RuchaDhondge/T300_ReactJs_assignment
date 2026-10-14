const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'completed', label: 'Completed' },
  { value: 'pending', label: 'Pending' },
];

export default function TodoFilter({ selectedFilter, onFilterChange }) {
  return (
    <div className="filter-group" role="group" aria-label="Todo filters">
      {FILTERS.map((filter) => (
        <button
          key={filter.value}
          type="button"
          className={`filter-btn ${
            selectedFilter === filter.value ? 'selected' : ''
          }`}
          onClick={() => onFilterChange(filter.value)}
        >
          {filter.label}
        </button>
      ))}
    </div>
  );
}
