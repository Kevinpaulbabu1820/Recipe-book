import React, { useState } from 'react';
import Search from './SearchForm';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

export default function Header({ darkMode, toggleDarkMode, handleSearch }) {
  const [search, setSearch] = useState('');

  return (
    <header className={`flex flex-col px-6 py-6 shadow ${darkMode ? 'bg-black' : 'bg-white'}`}>
      <div className="flex justify-between items-center w-full">
        {/* Heading */}
        <Link to="/" className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>
          Meal Search
        </Link>

        {/* Search Bar */}
        <div className="flex items-center space-x-6">
          <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
        </div>

        {/* Navbar and Dark Mode Toggle */}
        <div className="flex items-center space-x-6">
          <Navbar darkMode={darkMode} />
          <button
            onClick={toggleDarkMode}
            className="p-2 bg-white text-black rounded-full shadow hover:bg-gray-200 dark:bg-black dark:text-white flex items-center justify-center"
          >
            {darkMode ? (
              <span role="img" aria-label="Sun" className="text-xl">☀️</span>
            ) : (
              <span role="img" aria-label="Moon" className="text-xl">🌙</span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
}