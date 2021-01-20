import 'twin.macro';

import { useDarkMode } from './hooks/useDarkMode';
import { ThemeContext } from './context/ThemeContext';

import Header from './components/layout/Header';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode && 'dark'} tw="font-sans">
      <ThemeContext.Provider value={{ darkMode, toggleDarkMode }}>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
