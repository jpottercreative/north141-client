import React from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "./layout/GlobalStyles";
import { lightTheme, darkTheme } from "./layout/theme";
import ThemeToggle from "./components/ThemeToggle";
import useDarkTheme from "./hooks/useDarkTheme";
import Header from './components/Header';


function App() {
  const [theme, themeToggle] = useDarkTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;

  return (
     <ThemeProvider theme={selectedTheme}>
        <>
          <GlobalStyles />
          <Header />
          <ThemeToggle themeToggler={themeToggle} />
           <p>Trying out light and dark themes! 😍</p>
        </>
     </ThemeProvider>
  )
}


export default App;
