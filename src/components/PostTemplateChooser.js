import React from 'react'
import { usePostContext } from '../contexts/PostContext'


function PostTemplateChooser( {slug} ) {

    const { getPost, postData } = usePostContext()

    // console.log(`+++CHOOSER SLUG: ` + slug)

    // getPost(slug)

    // console.log(postData)

  return (
    <div>PostTemplateChooser</div>
  )
}

export default PostTemplateChooser