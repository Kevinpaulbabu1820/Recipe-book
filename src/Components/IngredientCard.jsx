import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function IngredientCard({ ingredient }) {
  // Construct the image URL
  const ingredientImage = `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`;

  // State to track if the image is loaded
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback image in case the ingredient image fails to load
  const fallbackImage = 'https://via.placeholder.com/150?text=No+Image';

  return (
    <Link to={`/ingredients/${ingredient.strIngredient}`}>
      <div
        className={`border rounded-lg shadow p-4 transition-shadow hover:shadow-lg ${
          imageLoaded
            ? 'bg-white text-black dark:bg-gray-800 dark:text-white'
            : 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-400'
        }`}
      >
        {/* Loading Spinner */}
        {!imageLoaded && (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin rounded-full h-8 w-8 border-t-4 border-b-4 border-blue-500"></div>
          </div>
        )}

        {/* Ingredient Image */}
        <img
          src={ingredientImage}
          alt={ingredient.strIngredient}
          className={`w-full h-32 object-contain mb-4 ${imageLoaded ? 'block' : 'hidden'}`}
          onLoad={() => setImageLoaded(true)} // Set imageLoaded to true when the image is loaded
          onError={(e) => {
            e.target.src = fallbackImage; // Use fallback image if the original fails to load
            setImageLoaded(true);
          }}
        />

        {/* Ingredient Name */}
        <h2 className="text-lg font-semibold text-center mb-2">{ingredient.strIngredient}</h2>

      </div>
    </Link>
  );
}