import React from 'react';

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`text-center py-4  ${
        darkMode ? 'dark:bg-black text-white' :'bg-white text-black'
      }`}
    >
      <p>&copy; {new Date().getFullYear()} Meal Search. All rights reserved.</p>
    </footer>
  );
}