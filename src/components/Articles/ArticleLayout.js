import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import ArticleGrid from './ArticleGrid';
import { useArticleContext } from '../../contexts/ArticleContext'
import ArticleSearch from './ArticleSearch';

function ArticleLayout( { postOverrideFilter } ) {
    const [filteredPosts, setFilteredPosts] = useState([])
    const [postFilter, setPostFilter] = useState({
      type: 'text',
      text: '',
      posts: [],
    })
    const { posts }  = useArticleContext()
    
    if (postOverrideFilter) setPostFilter(postOverrideFilter)
    
// send EITHER filtered post data, OR post override data one set or another
    // const filteredPostData = () => {
    //     switch(postFilter.type) {
    //         case 'text' :
    //             return posts.filter((post) => Object.values(post.attributes.title || post.attributes.seo_description).join('').toLowerCase().includes(postFilter.text.toLowerCase()))
    //             break
    //         case 'posts' :
    //             return postFilter.posts.data
    //             break
    //         default :
    //             return ''
    //     }
    //   }
    //   console.log(filteredPostData())

  return (
    <Box sx={{ flexGrow: 1 }}>
        {/* <ArticleSearch postFilter={postFilter} setPostFilter={setPostFilter} /> */}
        <ArticleGrid posts={filteredPostData}/>
    </Box>
  )
}

export default ArticleLayout