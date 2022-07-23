import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useArticleContext } from '../../contexts/ArticleContext'

export default function ArticleCard( { post } ) {
    // console.log(post.id)
    const imageUrl = post.attributes.featured_image.data.attributes.formats.small.url

    const authorList = post.attributes.authors.data.map((author) => {
        return author.attributes.firstname
    })

    const handleCardClick = (e) => {
        console.log(e.target)
    }
  return (
    <Card onClick={handleCardClick} sx={{ maxWidth: 'auto' }}>
      <CardMedia
        component="img"
        image={imageUrl}
        alt={post.attributes.featured_image.data.attributes.alternativeText}
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {post.attributes.title}
        </Typography>
        {/* <Typography align='left' gutterBottom variant="p" component="div">
          Author: {authorList}
        </Typography> */}
        <Typography align='left' variant="body2" color="text.secondary">
            {post.attributes.seo_description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}