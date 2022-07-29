import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../http'
import PostTemplateChooser from '../components/PostTemplateChooser'

function PostLayout() {
  const [postData, setPostData] = useState({})
  const params = useParams()
  const postSlug = params.id

  const getPost = async () => {
    const response = await http.get(`/api/blogpost/${postSlug}`)
    const data = await response.data.data
    setPostData(data)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <PostTemplateChooser postData={postData}/>
    </div>
  )
}

export default PostLayout