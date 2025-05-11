import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header'; // Import the Header component

export default function MealDetails({ darkMode, toggleDarkMode }) {
  const { idMeal } = useParams(); // Extract the meal ID from the URL
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchMealDetails = async () => {
      try {
        setError('');
        const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Failed to fetch meal details');
        }
        const data = await response.json();
        setMeal(data.meals[0]);
      } catch (error) {
        console.error('Error fetching meal details:', error);
        setError('Error fetching meal details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchMealDetails();
  }, [idMeal]);

  if (loading) return <p>Loading meal details...</p>;
  if (error) return <p className="text-red-500">{error}</p>;

  // Extract ingredients and measurements
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${measure} ${ingredient}`);
    }
  }

  return (
    <div className={`${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'} min-h-screen`}>
      {/* Include the Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={() => {}} />

      {/* Meal Details Card */}
      <div className="flex justify-center items-center p-6">
        <div
          className={`max-w-4xl w-full rounded-lg shadow-lg overflow-hidden ${
            darkMode ? 'bg-black text-white' : 'bg-white text-black'
          }`}
        >
          <img
            src={meal.strMealThumb}
            alt={meal.strMeal}
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h1 className="text-3xl font-bold text-center mb-6">{meal.strMeal}</h1>
            <div className="mb-6">
              <p><strong>Category:</strong> {meal.strCategory}</p>
              <p><strong>Area:</strong> {meal.strArea}</p>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <ul className="list-disc list-inside">
                {ingredients.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <p>{meal.strInstructions}</p>
            </div>
            {meal.strYoutube && (
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-4">Video Tutorial</h2>
                <iframe
                  width="100%"
                  height="315"
                  src={`https://www.youtube.com/embed/${meal.strYoutube.split('v=')[1]}`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}