// import React from 'react'
// import styled from 'styled-components'

// const StyledHeader = styled.div`
//     z-index: 1;
//     position:inline; 
//     width:100%; 
//     height:60px;
//     margin-bottom: 60px; 
//     background:rgba(0,0,0,0.1);
    
//     & a {
//         color:white;
//         background:rgba(0,0,0,0.1); 
//         display:inline-block; 
//         padding:0px 30px; 
//         height: 60px;
//         line-height:60px; 
//         text-align:center;
//         font-family: 'Roboto Slab', serif; 
//         text-decoration:none;
//         text-transform:uppercase; 
//         letter-spacing:2px; 
//         font-weight:700;
//   `

// function Header() {
//   return (
//     <StyledHeader>
//         This is the Header
//         <a href="http://google.com">link?</a>    
//     </StyledHeader>
//   )
// }

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
// export default Header