import { ThemeProvider } from 'styled-components';
import { Container } from './components/common/Container';
import { NavBar } from './components/common/NavBar';

import Router from './Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Router>
        <div />
      </Router>
    </Container>
  </ThemeProvider>
);

export default App;
