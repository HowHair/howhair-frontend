import { ThemeProvider } from 'styled-components';
import { Container } from './components/common/Container';

import Router from './Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Router />
    </Container>
  </ThemeProvider>
);

export default App;
