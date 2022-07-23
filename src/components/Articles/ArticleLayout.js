import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import ArticleGrid from './ArticleGrid';
import { useArticleContext } from '../../contexts/ArticleContext'
import ArticleSearch from './ArticleSearch';

function ArticleLayout( { postOverrides } ) {

    const { posts }  = useArticleContext()
    console.log(postOverrides ? true : false)
    console.log(posts)

    const filteredPosts = postOverrides ? postOverrides : posts 

    console.log(filteredPosts)
  return (
    <Box sx={{ flexGrow: 1 }}>
        {/* <ArticleSearch postFilter={postFilter} setPostFilter={setPostFilter} /> */}
        <ArticleGrid posts={filteredPosts}/>
    </Box>
  )
}

export default ArticleLayout