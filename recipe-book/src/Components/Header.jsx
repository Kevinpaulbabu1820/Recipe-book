import React, { useState, useEffect } from 'react';
import Search from './SearchForm';
import Card from './Card';

export default function Header({ darkMode, toggleDarkMode }) {
  const [search, setSearch] = useState('');
  const [meals, setMeals] = useState([]);

  const handleSearch = (query) => {
    console.log('Search query:', query);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setMeals(data.meals || []); // Set meals to an empty array if no meals found
      })
      .catch((error) => {
        console.error('Error fetching meals:', error);
      });
  };

  // Fetch 6 random meals when the application opens
  useEffect(() => {
    const fetchRandomMeals = async () => {
      try {
        // Create an array of 6 fetch promises
        const fetchPromises = Array.from({ length: 6 }, () =>
          fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => response.json())
        );

        // Resolve all fetch promises concurrently
        const results = await Promise.all(fetchPromises);

        // Extract meals from the results
        const randomMeals = results.map((result) => result.meals[0]);
        setMeals(randomMeals);
      } catch (error) {
        console.error('Error fetching random meals:', error);
      }
    };

    fetchRandomMeals();
  }, []);

  return (
    <header className={`flex flex-col px-6 py-6 shadow ${darkMode ? 'bg-black' : 'bg-white'}`}>
      {/* Top Section: Heading, Search Bar, and Toggle Button */}
      <div className="flex justify-between items-center w-full">
        <h1 className={`text-2xl font-bold ${darkMode ? 'text-white' : 'text-black'}`}>Meal Search</h1>
        <div className="flex-grow flex justify-center">
          <Search search={search} setSearch={setSearch} handleSearch={handleSearch} />
        </div>
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

      {/* Meals Section */}
      {meals.length === 0 && <p className="text-center py-8 text-gray-500">No meals found</p>}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {meals.map((meal) => (
          <Card key={meal.idMeal} meal={meal} />
        ))}
      </div>
    </header>
  );
}