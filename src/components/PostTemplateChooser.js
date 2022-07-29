import React from 'react'
import BlogPostTemplate from './templates/BlogPostTemplate'
import PhotoPostTemplate from './templates/PhotoPostTemplate'
import VideoPostTemplate from './templates/VideoPostTemplate'

function PostTemplateChooser( {postData} ) {

  console.log(postData.post_type)

  const ReturnSelector = () => {
    switch (postData.post_type) {
      case 'blog' :
        return <BlogPostTemplate postData={postData} />
      case 'photo' : 
        return <PhotoPostTemplate postData={postData} />
      case 'video' : 
        return <VideoPostTemplate postData={postData} />
      default:
        return <BlogPostTemplate postData={postData} />  
        }
      }

  return (
    <div>
      <ReturnSelector />
    </div>
  )
}

export default PostTemplateChooser