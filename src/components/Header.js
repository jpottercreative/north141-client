import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import CookieIcon from '@mui/icons-material/Cookie';
import EggIcon from '@mui/icons-material/Egg';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LightIcon from '@mui/icons-material/Light';

export default function Header( { setNavigation, toggleDarkMode } ) {

  const handleNav = (e) => {
    setNavigation(e.currentTarget.name)
  }
  
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static"
      color="secondary" enableColorOnDark
      >
        <Toolbar>
          <IconButton
            name="home"
            size="large"
            edge="start"
            color="inherit"
            aria-label="home"
            sx={{ mr: 2 }}
            onClick={handleNav}
          >
            <CookieIcon name="home"/>
          </IconButton>
          <IconButton
            name="articles"
            size="large"
            edge="start"
            color="inherit"
            aria-label="articles"
            sx={{ mr: 2 }}
            onClick={handleNav}
          >
            <EggIcon name="articles"/>
          </IconButton>
          <IconButton
            name="about"
            size="large"
            edge="start"
            color="inherit"
            aria-label="about"
            sx={{ mr: 2 }}
            onClick={handleNav}
          >
            <FastfoodIcon name="about"/>
          </IconButton>
          <Box sx={{ flexGrow: 1 }}></Box>
          <IconButton
            name="about"
            size="large"
            edge="end"
            color="inherit"
            aria-label="about"
            sx={{ mr: 2 }}
            onClick={toggleDarkMode}
          >
            <LightIcon name="template_mode"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// export default Header