import React, {useState, useEffect} from 'react'
import { ArticleProvider } from '../../contexts/ArticleContext'
import ArticleLayout from './ArticleLayout'


function Articles( { postOverride } ) {
  const [overrides, setOverrides] = useState([])

 if (postOverride) {
    async function override() {
      try {
        const response = await postOverride
        console.log(response)
        const data = await response
        console.log(data)
        setOverrides(data)
      }
      catch(error) {
        console.log(`Could not get overrides: ${error}`);
      }
    }
    override()
  }

  

  console.log(overrides)

  const postOverrideFilter = {
    type: 'posts',
    text: '',
    posts: overrides.data,
  }

  return (
    <ArticleProvider>
        <ArticleLayout postOverrideFilter={postOverrideFilter}/>
    </ArticleProvider>
  )
}

export default Articles