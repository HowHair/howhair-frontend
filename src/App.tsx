import { ThemeProvider } from 'styled-components';
import { Container } from './components/common/Container';
import { NavBar } from './components/common/NavBar';

import Router from './Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Container>
        <Router>
          <NavBar />
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
