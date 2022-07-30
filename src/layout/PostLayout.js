import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import http from '../http'
import PostTemplateChooser from '../components/PostTemplateChooser'

function PostLayout() {
  const [postMeta, setPostMeta] = useState({
    prevPost: {
      title: "previous post",
      page_slug: ""
    },
    nextPost: {
      title: "next post",
      page_slug: ""
    }
  })
  const [postData, setPostData] = useState({
    id: "",
    attributes: {
      title: ""
    }
  })
  const params = useParams()
  const postSlug = params.slug

  const getPost = async () => {
    const response = await http.get(`/api/blogpost/${postSlug}`)
    console.log(response)
    const data = await response.data.data
    const meta = await response.data.meta
    setPostData(data)
    setPostMeta(meta)
  }

  useEffect(() => {
    getPost()
  }, [])

  return (
    <div>
      <PostTemplateChooser postData={postData} postMeta={postMeta}/>
    </div>
  )
}

export default PostLayout