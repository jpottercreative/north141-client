import React from 'react'
import { useHomepageContext } from '../../contexts/HomepageContext'
import Articles from '../Articles/Articles'
import Box from '@mui/material/Box';
import Rando from '../Rando';

function HomepageLayout() {
    const {homepageData} = useHomepageContext()
    // console.log(`your homepage data~: `)
    // console.log(homepageData)

  return (
    <Box
    sx={{m: "3em"}}>
      <Box>
      Your homepage friend
      </Box>
      <Rando heroData={homepageData.page_hero} />
      <Articles postOverride={homepageData.blogposts}/>
      {/* <Articles /> */}
    

    </Box>
  )
}

export default HomepageLayout