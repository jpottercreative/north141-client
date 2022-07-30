import React from 'react'
import HeroComp from '../PostTemplateComponents/HeroComp'
import ImageCollectionComp from '../PostTemplateComponents/ImageCollectionComp'
import RichTextComp from '../PostTemplateComponents/RichTextComp'
import Box from '@mui/material/Box';
import { PublishedDate } from '../PostTemplateComponents/ComponentFields/ComponentFields';
import PageBody from '../PostTemplateComponents/PageBody';

function PhotoPostTemplate( { postData } ) {
    // console.log(postData.attributes.tags)

    // const PageBody = (postData) => {
    //   postData.attributes.page_body.map((comp) => {
    //     console.log(comp)
    //   })
    // }



  return (

    <Box>
      <Box variant="header">
        <HeroComp 
        image={postData.attributes.featured_image.data.attributes} 
        title={postData.attributes.title}
        subtitle={postData.attributes.subtitle}/>
      </Box>
      <Box>
        <h4>Published: <PublishedDate date={postData.attributes.publishedAt}/> </h4>
        <h4>tags: </h4>
      </Box>
      <Box>
        <PageBody postDataBodyArr={postData.attributes.page_body}/>
      </Box>
      <Box>

      </Box>
      
    </Box>
  )
}

export default PhotoPostTemplate