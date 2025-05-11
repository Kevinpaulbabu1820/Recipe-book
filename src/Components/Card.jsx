import { Link } from 'react-router-dom';

export default function Card({ meal, darkMode }) {
  return (
    <div
      className={`max-w-sm rounded overflow-hidden shadow-lg ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      }`}
    >
      <img className="w-full" src={meal.strMealThumb} alt="Meal" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
        <p className="text-base">{meal.strInstructions?.slice(0, 100)}</p>
      </div>
      <div className="px-6 py-4 flex justify-between items-center">
        {/* Hyperlink to Meal Details */}
        <Link
          to={`/meal/${meal.idMeal}`}
          className={`${
            darkMode ? 'text-gray-300 hover:text-white' : 'text-blue-600 hover:text-blue-500'
          }`}
        >
          View Details
        </Link>

        {/* Enhanced YouTube Button */}
        {meal.strYoutube && (
          <a
            href={meal.strYoutube}
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center px-4 py-2 rounded ${
              darkMode
                ? 'bg-black text-white hover:bg-red-500'
                : 'bg-red-500 text-white hover:bg-red-400'
            }`}
          >
            {/* YouTube Icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M23.498 6.186a2.91 2.91 0 0 0-2.048-2.048C19.692 3.5 12 3.5 12 3.5s-7.692 0-9.45.638A2.91 2.91 0 0 0 .502 6.186C0 7.944 0 12 0 12s0 4.056.502 5.814a2.91 2.91 0 0 0 2.048 2.048C4.308 20.5 12 20.5 12 20.5s7.692 0 9.45-.638a2.91 2.91 0 0 0 2.048-2.048C24 16.056 24 12 24 12s0-4.056-.502-5.814zM9.75 15.568V8.432L15.818 12 9.75 15.568z" />
            </svg>
            Watch on YouTube
          </a>
        )}
      </div>
    </div>
  );
}