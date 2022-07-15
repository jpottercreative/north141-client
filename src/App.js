import React, { useState } from 'react';
import './App.css';
import { CssBaseline } from '@mui/material';
// import { GlobalStyles } from "./layout/GlobalStyles";
import { appTheme } from "./layout/theme";
import { styled, ThemeProvider } from '@mui/material/styles';
// import useDarkTheme from "./hooks/useDarkTheme";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './components/Header';

const Item = styled(Paper)(({ theme }) => ({
   backgroundColor: theme.palette.mode === 'light' ? '#1A2027' : '#fff',
   ...theme.typography.body2,
   padding: theme.spacing(1),
   textAlign: 'center',
   color: theme.palette.text.secondary,
   borderRadius: 0,
 }));


function App() {
   const [isDarkMode, setIsDarkMode] = useState(true)
   const [navigation, setNavigation] = useState('')
   
   const toggleDarkMode = () => {
      setIsDarkMode((isDarkMode) => !isDarkMode)
   }
   const AppBody = () => {
      // switch tree for navigation
      switch (navigation) {
         case 'home' :
            return <p>hello world 1 i'm home</p>
            break
         case 'articles' :
            return <p>articles articles articles</p>

            break
         case 'about' :
            return <p>you want to know about this?</p>
            break
         default: 
            return <p>default</p>
      }
   }

   
   console.log(isDarkMode)
   console.log(navigation)
  
  return (
      <ThemeProvider theme={appTheme}>
         <CssBaseline enableColorScheme />
         
         <Header toggleDarkMode={toggleDarkMode} setNavigation={setNavigation}/>
         <h2>
            hello
         </h2>
         <div>
            <AppBody />
         </div>
     </ThemeProvider>
  )
}

export default App;
