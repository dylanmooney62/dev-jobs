import { useState, useEffect } from 'react';

const getInitialPreference = () => {
  // Check if user has saved preference

  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = JSON.parse(window.localStorage.getItem('dark-mode'));

    if (typeof storedPrefs === 'boolean') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

export const useDarkMode = () => {
  const [darkMode, setDarkMode] = useState(() => getInitialPreference());

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  // Save theme preference when it changes
  useEffect(() => {
    JSON.stringify(localStorage.setItem('dark-mode', darkMode));
  }, [darkMode]);

  return {
    darkMode,
    toggleDarkMode,
  };
};
