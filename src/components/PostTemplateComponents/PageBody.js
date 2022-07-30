import React from 'react'
import HeroComp from './HeroComp'
import ImageCollectionComp from './ImageCollectionComp'
import RichTextComp from './RichTextComp'
import Box from '@mui/material/Box';


function PageBody({postDataBodyArr}) {
    // console.log(postDataBodyArr)


        const components = postDataBodyArr.map((comp) => {
            console.log(comp)
            switch (comp.__component) {
                case 'comps.hero' :
                    return <HeroComp 
                    key={comp.id} 
                    image={comp.image.data.attributes} 
                    title={comp.title}
                    subtitle={comp.subtitle}
                    link={comp.link}
                    />
                case 'comps.image-collection' :
                    return <ImageCollectionComp key={comp.id} comp={comp}/>
                case 'comps.rich-text' :
                    return <RichTextComp key={comp.id} comp={comp}/>
            }
        })


  return (
    <Box>
        {components}
    </Box>
  )
}

export default PageBody