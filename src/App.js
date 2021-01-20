import 'twin.macro';

import { useDarkMode } from './hooks/useDarkMode';

import Header from './components/layout/Header';

const App = () => {
  const { darkMode, toggleDarkMode } = useDarkMode();

  return (
    <div className={darkMode && 'dark'} tw="font-sans">
      <Header>
        <button onClick={toggleDarkMode} tw="dark:text-red-500">
          Toggle Theme
        </button>
      </Header>
    </div>
  );
};

export default App;
