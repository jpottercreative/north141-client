import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';

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

const HeroStyled = styled(Box)({
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    textAlign: 'center', 
    position: 'relative',
    width: '100%'
  });

function HeroComp({ image, title, subtitle, link }) {
// console.log(image)
    const backgroundUrl = image ? image.formats.large.url : null
    const subtitleCopy = subtitle ? subtitle : ""

  return (
    
    <HeroStyled className='hero-styled' sx={{background:`url(${backgroundUrl})`}}>
        <Inner>
            <Copy>
                <a href={link}>
                <h1>{title}</h1>
                <p>{subtitleCopy}</p>
                </a>
            </Copy>
        </Inner>
    </HeroStyled>
  )
}


export default HeroComp