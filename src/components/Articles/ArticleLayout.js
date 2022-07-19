import React, { useState } from 'react'
import Box from '@mui/material/Box';
import ArticleGrid from './ArticleGrid';
import { useArticleContext } from '../../contexts/ArticleContext'


function ArticleLayout() {
    const [filteredPosts, setFilteredPosts] = useState([])
    const [filter, setFilter] = useState({
      filterType: 'text',
      filterText: '',
      filteredPosts: [],
    })
    const { posts }  = useArticleContext()
  return (
    <Box sx={{ flexGrow: 1 }}>

        <ArticleGrid filter={filter} posts={posts}/>
    </Box>
  )
}

export default ArticleLayout