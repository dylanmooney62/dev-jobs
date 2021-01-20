import { useState, useEffect } from 'react';

const getInitialPreference = () => {
  // Check if user has saved preference

  if (typeof window !== 'undefined' && window.localStorage) {
    const storedPrefs = JSON.parse(window.localStorage.getItem('color-theme'));

    if (typeof storedPrefs === 'string') {
      return storedPrefs;
    }

    const userMedia = window.matchMedia('(prefers-color-scheme: dark)');
    if (userMedia.matches) {
      return 'dark';
    }
  }

  return 'light';
};

export const useTheme = () => {
  const [theme, setTheme] = useState(() => getInitialPreference());

  const toggleTheme = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  // Save theme preference when it changes
  useEffect(() => {
    localStorage.setItem('color-theme', JSON.stringify(theme));
  }, [theme]);

  return {
    theme,
    toggleTheme,
  };
};
