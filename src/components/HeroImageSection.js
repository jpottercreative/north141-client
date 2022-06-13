import React from 'react'
import styled from 'styled-components'

const StyledHeroSection = styled.section`
background:url(https://4.bp.blogspot.com/_AQ0vcRxFu0A/S9shDGGyMTI/AAAAAAAAAYk/kn3WTkY2LoQ/s1600/IMG_0714.JPG);
  background-size:cover;
  background-position:center center;
  background-attachment:fixed;
}
`

function HeroImageSection() {
  return (
    <StyledHeroSection>HeroImageSection</StyledHeroSection>
  )
}

export default HeroImageSection