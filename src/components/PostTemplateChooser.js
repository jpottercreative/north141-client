import React from 'react'
import BlogPostTemplate from './templates/BlogPostTemplate'
import PhotoPostTemplate from './templates/PhotoPostTemplate'
import VideoPostTemplate from './templates/VideoPostTemplate'
import PaginationSimple from './PostTemplateComponents/PaginationSimple'

function PostTemplateChooser( {postData, postMeta} ) {
  console.log(postData)

  
  const ReturnSelector = () => {
    switch (postData.attributes.post_type) {
      case 'blog' :
        return <BlogPostTemplate postData={postData} />
      case 'photo' : 
        return <PhotoPostTemplate postData={postData} />
      case 'video' : 
        return <VideoPostTemplate postData={postData} />
        }
      }

  return (
    <div>
      <PaginationSimple postMeta={postMeta} />
      {/* <h1>{postData.attributes.title}</h1> */}
      <ReturnSelector /> 
    </div>
  )
}

export default PostTemplateChooser