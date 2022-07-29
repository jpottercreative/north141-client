import React from 'react'
import { useParams } from 'react-router-dom'
import PostTemplateChooser from '../components/PostTemplateChooser'
import { PostProvider} from '../contexts/PostContext'

function PostLayout() {
  const params = useParams()
  const slug = params.id

  console.log(`**SLUG: ` + slug)
  
  return (
    <PostProvider>
      <PostTemplateChooser slug={slug}/>
    </PostProvider>
  )
}

export default PostLayout