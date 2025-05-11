import React, { useState, useEffect } from 'react';
import IngredientCard from '../Components/IngredientCard';
import MainLayout from '../Layouts/MainLayout';

export default function Ingredients() {
  const [ingredients, setIngredients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode); // Toggles the 'dark' class on the root element
  };

  const fetchIngredients = async (query = '') => {
    setLoading(true); // Show loading indicator
    try {
      setError('');
      const url = query
        ? `https://www.themealdb.com/api/json/v1/1/search.php?i=${query}`
        : 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch ingredients');
      }
      const data = await response.json();
      setIngredients(data.meals || []); // Set ingredients or an empty array if none found
    } catch (error) {
      console.error('Error fetching ingredients:', error);
      setError('Error fetching ingredients. Please try again.');
    } finally {
      setLoading(false); // Hide loading indicator
    }
  };

  useEffect(() => {
    fetchIngredients(); // Fetch the list of ingredients when the page loads
  }, []);

  const handleSearch = (query) => {
    fetchIngredients(query); // Fetch ingredients based on the search query
  };

  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch}>
      <div className="p-6">
        {/* Ingredients Section */}
        <h1 className="text-2xl font-bold text-center mb-6">Ingredients</h1>
        {error && <p className="text-center text-red-500">{error}</p>}
        {loading && <p className="text-center text-blue-500">Loading ingredients...</p>}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {!loading &&
            ingredients.map((ingredient) => (
              <IngredientCard key={ingredient.idIngredient} ingredient={ingredient} />
            ))}
        </div>
      </div>
    </MainLayout>
  );
}