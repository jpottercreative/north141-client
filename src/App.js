import React, { useEffect, useState } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
import { appTheme } from "./layout/theme";
import { styled, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './components/Header';
import Homepage from "./layout/Homepage"
import Articles from "./layout/Articles"
import About from './layout/About';
import { createTheme } from "@mui/material/styles";

function App() {
   const [isDarkMode, setIsDarkMode] = useState(true)
   const [colorMode, setColorMode] = useState('light')
   const [navigation, setNavigation] = useState('')
   
   const toggleDarkMode = () => {
      setIsDarkMode((isDarkMode) => !isDarkMode)
   }
   useEffect(() => {
      isDarkMode ? setColorMode('dark') : setColorMode('light')
   }, [isDarkMode])
   
   const themeColorMode = createTheme({
      palette: {
        mode: colorMode,
      },
    });

   const AppBody = () => {
      // switch tree for navigation
      switch (navigation) {
         case 'home' :
            return <Homepage />
            break
         case 'articles' :
            return <Articles />
            break
         case 'about' :
            return <About />
            break
         default: 
            return <Homepage />
      }
   }

  return (
      <ThemeProvider theme={appTheme}>
         <ThemeProvider theme={themeColorMode}>
         <CssBaseline enableColorScheme />
         
         <Header toggleDarkMode={toggleDarkMode} setNavigation={setNavigation}/>
         <h2>
             + {navigation.toUpperCase()}
         </h2>
         <div>
            <AppBody />
         </div>
         </ThemeProvider>
     </ThemeProvider>
  )
}

export default App;
