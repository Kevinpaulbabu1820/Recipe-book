export default function Card({meal,darkMode }) {
    return (
      <div
        className={`max-w-sm rounded overflow-hidden shadow-lg ${
          darkMode ? 'bg-white text-black' : 'bg-black text-white'
        }`}
      >
        <img className="w-full" src={meal.strMealThumb} alt="Meal" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{meal.strMeal}</div>
          { <p className="text-base">{meal.strInstructions?.slice(0,100)}</p> }
        </div>
      </div>
    );
  }
  
  