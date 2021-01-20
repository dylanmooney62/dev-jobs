import React, { useContext } from 'react';
import 'twin.macro';

import { ThemeContext } from '../context/ThemeContext';

import ToggleButton from '../components/shared/ToggleButton';

import { ReactComponent as SunIcon } from '../assets/desktop/icon-sun.svg';
import { ReactComponent as MoonIcon } from '../assets/desktop/icon-moon.svg';

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div tw="flex items-center">
      <SunIcon />
      <ToggleButton
        tw="mx-4"
        onToggle={toggleTheme}
        checked={theme === 'dark'}
      />
      <MoonIcon />
    </div>
  );
};

export default ThemeToggleButton;
