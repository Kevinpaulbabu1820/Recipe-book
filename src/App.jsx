import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Ingredients from './views/Ingredients';
import MealsByIngredient from './views/MealsByIngredient';
import MealDetails from './Components/MealsDetails';

import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };



  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
               
              />
            }
          />
          <Route
            path="/ingredients"
            element={<Ingredients darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/ingredients/:ingredient"
            element={<MealsByIngredient darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
          <Route
            path="/meal/:idMeal"
            element={<MealDetails darkMode={darkMode} toggleDarkMode={toggleDarkMode} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;