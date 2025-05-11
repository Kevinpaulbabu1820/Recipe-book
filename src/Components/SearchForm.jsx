// filepath: c:\Users\kevin\Documents\login\recipe-book\src\Components\SearchForm.jsx
import React, { useEffect, useRef } from 'react';

export default function Search({ search, setSearch, handleSearch }) {
  const inputRef = useRef(null);

  const onSearch = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleSearch(search); // Call the handleSearch function with the current search value
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={onSearch} className="flex items-center gap-4">
      <input
        type="text"
        name="searchInput"
        value={search}
        ref={inputRef}
        onInput={(e) => setSearch(e.target.value)}
        placeholder="Search for meals..."
        className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <button
        type="submit"
        className="px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
      >
        Search
      </button>
    </form>
  );
}