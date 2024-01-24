import SunSVG from './icons/svgs/SunSVG.js';
import MoonSVG from './icons/svgs/MoonSVG.js';

import React, { useEffect, useState } from 'react';


const ThemeToggle = () => {
  // Use useState to keep track of the theme
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check the current theme in useEffect to ensure it runs on the client side
    setIsDarkMode(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    }
  };

  return (
    <div 
      className="flex items-center bg-white shadow  dark:bg-neutral-800 p-1 rounded-full w-12 h-7 cursor-pointer ${isDarkMode ? 'border border-neutral-700' : ''}`}"
      onClick={toggleTheme}
    >
      <div className={`w-5 h-5 bg-yellow-400 dark:bg-violet-500 shadow-lg rounded-full shadow-md transform duration-300 ease-in-out ${isDarkMode ? 'translate-x-5 w-5 border border-neutral-700' : ''}`}>
	  {!isDarkMode ? <SunSVG className="fill-white"/> : <MoonSVG className="fill-white"/>}
      </div>
      
    </div>
  );
};

export default ThemeToggle;
