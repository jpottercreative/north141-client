import React from 'react'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

function ImageCollectionComp( { comp } ) {
    console.log('image collection called')
    console.log(comp.source.data)

    const images = comp.source.data
    console.log(images)
    images.map((i) => console.log(i.attributes.formats.medium.url))
    images.map((i) => console.log(i))

  return (
    <ImageList sx={{ height: 'auto' }} cols={2} rowHeight={400}>
      {images.map((item) => (
        <ImageListItem key={item.id}>
          <img
            src={`${item.attributes.formats.medium.url}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.attributes.formats.medium.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.attributes.alternativeText}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  )
}

export default ImageCollectionComp