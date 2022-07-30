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
import Articles from "./components/Articles/Articles"
import About from './layout/About';
import PostLayout from './layout/PostLayout';
import Typography from '@mui/material/Typography';
import { createTheme } from "@mui/material/styles";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {
   const [isDarkMode, setIsDarkMode] = useState(true)
   const [colorMode, setColorMode] = useState('dark')
   
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

   // const AppBody = () => {
   //    // switch tree for navigation
   //    switch (navigation) {
   //       case 'home' :
   //          return <Homepage />
   //          break
   //       case 'articles' :
   //          return <Articles />
   //          break
   //       case 'about' :
   //          return <About />
   //          break
   //       default: 
   //          return <Homepage />
   //    }
   // }

  return (
   <BrowserRouter>
      <ThemeProvider theme={appTheme}>
         <ThemeProvider theme={themeColorMode}>
            <CssBaseline enableColorScheme />
               <Box>
                  <Header toggleDarkMode={toggleDarkMode} />
                  <Routes>
                        <Route path="/" element={<Homepage />} />
                        <Route path="articles" element={<Articles />} />
                        <Route path="articles/:slug" element={<PostLayout />} />
                        <Route path="/about" element={<About />} />
                  </Routes>
               </Box>
         </ThemeProvider>
     </ThemeProvider>
   </BrowserRouter>
  )
}

export default App;
