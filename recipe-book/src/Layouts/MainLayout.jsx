import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function MainLayout({ children, darkMode, toggleDarkMode }) {
  return (
    <div className={`min-h-screen flex flex-col ${darkMode ? 'bg-black text-white' : 'bg-gray-100 text-black'}`}>
      {/* Header */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      {/* Main Content */}
      <main className="flex-grow p-6">{children}</main>

      {/* Footer */}
      <Footer darkMode={darkMode} />
    </div>
  );
}