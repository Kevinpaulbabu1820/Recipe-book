import React, { useState, useEffect } from 'react';
import Card from './Card';
import LoadingIndicator from './Loading';

export default function RandomMeals({ darkMode }) {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchRandomMeals = async () => {
    setLoading(true);
    try {
      setError('');
      const fetchPromises = Array.from({ length: 6 }, () =>
        fetch('https://www.themealdb.com/api/json/v1/1/random.php').then((response) => {
          if (!response.ok) {
            throw new Error('Failed to fetch random meal');
          }
          return response.json();
        })
      );

      const results = await Promise.all(fetchPromises);
      const randomMeals = results.map((result) => result.meals[0]);
      setMeals(randomMeals);
    } catch (error) {
      console.error('Error fetching random meals:', error);
      setError('Error fetching random meals. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomMeals();
  }, []);

  return (
    <div className="mt-6">
      <h2 className={`text-xl font-semibold ${darkMode ? 'text-white' : 'text-black'}`}>Random Meals</h2>
      {error && <p className="text-center py-8 text-red-500">{error}</p>}
      {loading && <LoadingIndicator message="Loading random meals..." />}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 mt-6">
        {!loading &&
          meals.map((meal) => (
            <Card key={meal.idMeal} meal={meal} darkMode={darkMode} />
          ))}
      </div>
    </div>
  );
}