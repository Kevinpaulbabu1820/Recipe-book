import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './views/Home';
import Ingredients from './views/Ingredients';
import MealsByIngredient from './views/MealsByIngredient';
import MealDetails from './Components/MealsDetails';
import Login from './views/Login';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState(null); // State to manage user authentication

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
  };

  const handleLogin = (userData) => {
    setUser(userData); // Set the user data after login
  };

  const handleLogout = () => {
    setUser(null); // Clear the user data on logout
  };

  return (
    <Router>
      <div className={`App ${darkMode ? 'dark' : ''}`}>
        <Routes>
          <Route
            path="/login"
            element={<Login darkMode={darkMode} onLogin={handleLogin} />}
          />
          <Route
            path="/"
            element={
              <Home
                darkMode={darkMode}
                toggleDarkMode={toggleDarkMode}
                user={user}
                onLogout={handleLogout}
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