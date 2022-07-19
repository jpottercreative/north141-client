import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import ArticleGrid from './ArticleGrid';
import { useArticleContext } from '../../contexts/ArticleContext'
import ArticleSearch from './ArticleSearch';

function ArticleLayout( { postOverride } ) {
    const [filteredPosts, setFilteredPosts] = useState([])
    const [postFilter, setPostFilter] = useState({
      type: 'text',
      text: '',
      posts: [],
    })
    const { posts }  = useArticleContext()
// console.log(posts)

    // postOverride.posts ? setPostFilter({
    //     type: 'post',
    //     text: '',
    //     posts: [...postOverride.posts]
    // }) : null

    const filteredPostData = posts.filter((post) => {
        switch(postFilter.type) {
            case 'text' :
                return Object.values(post.attributes.title || post.attributes.seo_description).join('').toLowerCase().includes(postFilter.text.toLowerCase())
                break
            case 'posts' :
                return postFilter.posts
                break
            default :
                return ''
        }
      })
    //   const filteredSearchedStudentData = searchedStudentData.filter((student) => {
    //     return Object.values(student.tags).join('').toLowerCase().includes(searchTags.toLowerCase())
    //   })
    // console.log(filteredPostData)

  return (
    <Box sx={{ flexGrow: 1 }}>
        <ArticleSearch postFilter={postFilter} setPostFilter={setPostFilter} />
        <ArticleGrid postFilter={postFilter} posts={filteredPostData}/>
    </Box>
  )
}

export default ArticleLayout