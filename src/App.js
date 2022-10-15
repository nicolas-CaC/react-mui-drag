import './App.css';
import { Navbar } from './components/Header/Navbar';
import { Main } from './components/Main/Main';
import { createTheme, ThemeProvider } from '@mui/material'
import { config } from './data/muiConfig';

function App() {
  return (
    <ThemeProvider theme={ createTheme(config) }>
      <Navbar />
      <Main />
    </ThemeProvider>
  );
}

export default App;
