import React from 'react'
import Box from '@mui/material/Box';
import ArticleGrid from './ArticleGrid';

function ArticleLayout( { postOverrides } ) {
    const filteredPosts = postOverrides 

  return (
    <Box sx={{ flexGrow: 1 }}>
        <ArticleGrid posts={filteredPosts}/>
    </Box>
  )
}

export default ArticleLayout