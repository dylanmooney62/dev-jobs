import 'twin.macro';

import { useTheme } from './hooks/useTheme';
import { ThemeContext } from './context/ThemeContext';

import Header from './components/layout/Header';
import SearchBar from './components/Search/SearchBar';
import Container from './components/layout/Container';

const App = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={theme} tw="font-sans bg-light-gray">
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Header />
        <Container tw="-mt-12">
          <SearchBar />
        </Container>
      </ThemeContext.Provider>
    </div>
  );
};

export default App;
