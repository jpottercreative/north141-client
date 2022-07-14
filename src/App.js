import React from 'react';
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
import PostGrid from './components/PostGrid'
import HeroSection from './components/HeroSection';

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

  
  return (
      <ThemeProvider theme={selectedTheme}>
         <GlobalStyles />
            <Box sx={{flexGrow: 1}}>
               <Grid item xs>
                  <Item><h1>Hello whirlled</h1></Item>
               </Grid>
               <Grid item xs>
                  <Item>
                     <HeroSection section={1}/>
                  </Item>
               </Grid>
               <Grid item xs>
                  <Item>
                     <PostGrid />
                  </Item>
               </Grid>
               <Grid item xs>
                  <Item>
                     <HeroSection section={1}/>
                  </Item>
               </Grid>
        </Box>
     </ThemeProvider>
  )
}

export default App;
