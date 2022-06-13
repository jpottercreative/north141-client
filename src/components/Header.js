import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.div`
    z-index: 1;
    position:fixed; 
    width:100%; 
    height:60px; 
    background:rgba(0,0,0,0.1);
    
    & a {
        color:white;
        background:rgba(0,0,0,0.1); 
        display:inline-block; 
        padding:0px 30px; 
        height:60px;
        line-height:60px; 
        text-align:center;
        font-family: 'Roboto Slab', serif; 
        text-decoration:none;
        text-transform:uppercase; 
        letter-spacing:2px; 
        font-weight:700;
  `

function Header() {
  return (
    <StyledHeader>
        This is the Header
        <a href="http://google.com">link?</a>    
    </StyledHeader>
  )
}

export default Header