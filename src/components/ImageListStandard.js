import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

export default function ImageListStandard( { imageArray } ) {
    // const imageEntries = Object.entries(images)
    // console.log(images)
    // images.map((i) => console.log(i.attributes.formats.medium.url))
    // images.map((i) => console.log(i))
  return (
    <h1>image list</h1>
    // <ImageList sx={{ height: 'auto' }} cols={2} rowHeight={200}>
    //   {images.map((item) => (
    //     <ImageListItem key={item.id}>
    //       <img
    //         src={`${item.attributes.formats.medium.url}?w=164&h=164&fit=crop&auto=format`}
    //         srcSet={`${item.attributes.formats.medium.url}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
    //         alt={item.attributes.alternativeText}
    //         loading="lazy"
    //       />
    //     </ImageListItem>
    //   ))}
    // </ImageList>
  );
}