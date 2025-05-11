import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ darkMode }) {
  return (
    <nav className="flex space-x-4">
      <Link
        to="/"
        className={`hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
      >
        Home
      </Link>
      <Link
        to="/ingredients"
        className={`hover:underline ${darkMode ? 'text-white' : 'text-black'}`}
      >
        Ingredients
      </Link>
     
    </nav>
  );
}