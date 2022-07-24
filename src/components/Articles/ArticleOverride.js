import React from 'react'
import Box from '@mui/material/Box';
import ArticleGrid from './ArticleGrid';

function ArticleLayout( { postOverrides } ) {
    console.log('article overrides')
    const filteredPosts = postOverrides 

    // console.log(filteredPosts)
  return (
    <Box sx={{ flexGrow: 1 }}>
        <ArticleGrid posts={filteredPosts}/>
    </Box>
  )
}

export default ArticleLayout