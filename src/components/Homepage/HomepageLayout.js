import React from 'react'
import { useHomepageContext } from '../../contexts/HomepageContext'
import Articles from '../Articles/Articles'
import Box from '@mui/material/Box';
import HeroSection from '../Hero/HeroSection';

function HomepageLayout() {
  // imports the homepage context through axios (a context provider)
    const {homepageData} = useHomepageContext()
    // console.log(`your homepage data~: `)
    console.log(homepageData)

  return (
    <Box
    sx={{my: "3em"}}>
      <Box>
      Your homepage friend
      </Box>
        <HeroSection heroData={homepageData.page_hero}/>
        <Articles postOverride={homepageData.blogposts}/>
        {/* <Articles /> */}

    </Box>
  )
}

export default HomepageLayout