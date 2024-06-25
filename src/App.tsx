import Main from './pages/main/main';
import { ThemeProvider } from "styled-components"
import theme from './styles/theme';

function App() {
  return (
    <div className="App">
      <ThemeProvider theme = {theme}>
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
