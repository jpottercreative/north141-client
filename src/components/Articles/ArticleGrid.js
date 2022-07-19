import React, {useState} from 'react'
import { useArticleContext } from '../../contexts/ArticleContext'
import ArticleCard from './ArticleCard'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

function ArticleGrid( {posts} ) {


  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'left',
    color: theme.palette.text.secondary,
  }));

  const cards = posts.map((post) => {
    return (
      <Grid item key={post.id} xs={6}>
        <Item>
          <ArticleCard post={post} />
        </Item>
      </Grid>
    )
  })


  // console.log(cards)
  return (
    <Box sx={{ flexGrow: 1 }}>      
      <Grid container spacing={4}>  
          {cards}
      </Grid>
    </Box>
  )
}

export default ArticleGrid