import React from 'react'
import styled from 'styled-components'

const HeroStyled = styled.div`
background:url(https://4.bp.blogspot.com/_AQ0vcRxFu0A/S9shDGGyMTI/AAAAAAAAAYk/kn3WTkY2LoQ/s1600/IMG_0714.JPG);
background-size:cover;
background-position:center center;
background-attachment:fixed;
text-align:center; 
position:relative;
width: 100%;
`
const Inner = styled.div`
min-height:600px;
position: relative;
background: rgba(0,0,0,0.7) url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAACCAYAAACddGYaAAAAD0lEQVQIW2NkQABjRmQOAAM+AGkQsDBSAAAAAElFTkSuQmCC) repeat;
`
const Copy = styled.div`
position:absolute; 
top:50%; 
height:10em; 
margin-top:-5em; 
width:100%;
color:#fff;
    h1 {
        margin:0px;
        font-family: 'Roboto Slab', serif;
        font-weight:400;
        font-size:32px;
        padding:0px 20px;
    }
    p{
        font-family: 'Noto Sans', sans-serif; 
        font-size:14px;
        padding:0px 20px;
      }

`


function HeroSection({ section }) {
  return (
    <HeroStyled>
        <Inner>
            <Copy>
                <h1>This is a headline</h1>
                <p>this is copy</p>
            </Copy>
        </Inner>
    </HeroStyled>
  )
}

export default HeroSection