import React, { useState } from 'react';
import './App.css';
import MainLayout from './Layouts/MainLayout';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode); // Toggles the 'dark' class on the root element
  };

  return (
    <MainLayout darkMode={darkMode} toggleDarkMode={toggleDarkMode}>
      <div>
        {/* Your main content */}
      </div>
    </MainLayout>
  );
}

export default App;