import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../Components/Card'; // Import the updated Card component
import Header from '../Components/Header'; // Import the Header component

export default function MealsByIngredient({ darkMode, toggleDarkMode }) {
  const { ingredient } = useParams(); // Extract the ingredient from the URL
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMealsByIngredient = async () => {
      setLoading(true);
      try {
        setError('');
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch meals');
        }
        const data = await response.json();
        setMeals(data.meals || []);
      } catch (err) {
        console.error('Error fetching meals:', err);
        setError('Error fetching meals. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMealsByIngredient();
  }, [ingredient]);

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      {/* Include the Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={() => {}} />

      {/* Meals By Ingredient Content */}
      <div className="p-6">
        <h1 className="text-2xl font-bold text-center mb-6">
          Meals with "{ingredient}"
        </h1>
        {error && <p className="text-center text-red-500">{error}</p>}
        {loading && <p className="text-center text-blue-500">Loading meals...</p>}
        {!loading && meals.length === 0 && !error && (
          <p className="text-center text-gray-500">No meals found for "{ingredient}".</p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {!loading &&
            meals.map((meal) => (
              <Card key={meal.idMeal} meal={meal} darkMode={darkMode} />
            ))}
        </div>
      </div>
    </div>
  );
}