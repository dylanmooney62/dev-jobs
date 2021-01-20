import 'twin.macro';

import { useTheme } from './hooks/useTheme';
import { ThemeContext } from './context/ThemeContext';

import Header from './components/layout/Header';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme} tw="font-sans">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
