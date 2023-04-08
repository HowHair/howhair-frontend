import { ThemeProvider } from 'styled-components';
import { Container } from './components/common/Container';

import Router from './Router';
import GlobalStyle from './styles/globalStyle';
import theme from './styles/theme';

<<<<<<<< HEAD:src/index.tsx
const root = ReactDOM.createRoot(document.getElementById('root') as Element);
root.render(
========
const App = () => (
>>>>>>>> b6ff86933e86381ccce7b3c5c4de52e60878adb0:src/App.tsx
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Container>
      <Router />
    </Container>
  </ThemeProvider>
);

export default App;
