import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import RandomMeals from '../Components/RandomMeals';
import { useLocation } from 'react-router-dom';

export default function MainLayout({ children, darkMode, toggleDarkMode, handleSearch }) {
  const location = useLocation(); // Get the current route

  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} handleSearch={handleSearch} />

      {/* Show RandomMeals only on the Home page */}
      {location.pathname === '/' && <RandomMeals darkMode={darkMode} />}

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}