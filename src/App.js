import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from "./layout/GlobalStyles";
import { lightTheme, darkTheme } from "./layout/theme";
import { styled } from '@mui/material/styles';
import ThemeToggle from "./components/ThemeToggle";
import useDarkTheme from "./hooks/useDarkTheme";
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
  const [theme, themeToggle] = useDarkTheme();
  const selectedTheme = theme === 'light' ? lightTheme : darkTheme;
   const [navigation, setNavigation] = useState('')
   
   const AppBody = () => {
      
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
   console.log(navigation)
  
  return (
      <ThemeProvider theme={selectedTheme}>
         <GlobalStyles />
         
         <Header navigation={navigation} setNavigation={setNavigation}/>
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
