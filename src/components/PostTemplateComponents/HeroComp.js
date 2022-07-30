import React from 'react'
import styled from 'styled-components'
import Box from '@mui/material/Box';

// const HeroStyled = styled.Box`
// background-size:cover;
// background-position:center center;
// background-attachment:fixed;
// text-align:center; 
// position:relative;
// width: 100%;
// `
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

function HeroComp({ image, title, subtitle, link, test }) {
// console.log(image.formats.large.url)
    const backgroundUrl = image.formats.large.url ? image.formats.large.url : ""
    const subtitleCopy = subtitle ? subtitle : null
    console.log(test)
  return (
    <HeroStyled className='hero-styled' sx={{background:`url(${backgroundUrl})`}}>
        <Inner>
            <Copy>
                <h1>{title}</h1>
                <p>{subtitleCopy}</p>
            </Copy>
        </Inner>
    </HeroStyled>
  )
}


export default HeroComp