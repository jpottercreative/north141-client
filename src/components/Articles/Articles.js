import React, {useState, useEffect} from 'react'
import { ArticleProvider } from '../../contexts/ArticleContext'
import ArticleLayout from './ArticleLayout'


function Articles( { postOverride } ) {
  const [overrides, setOverrides] = useState([])

 if (postOverride) {
    async function override() {
      try {
        const response = await postOverride
        // console.log(response)
        const data = await response
        // console.log(data)
        setOverrides(data.data)
      }
      catch(error) {
        console.log(`Could not get overrides: ${error}`);
      }
    }
    override()
  }

  // console.log(Object.entries(overrides).length)

  console.log(overrides)

  
  const ReturnLayout = () => {
    return overrides.length > 0 ? <ArticleLayout postOverrides={overrides} /> : <ArticleLayout />
  }

  return (
    <ArticleProvider>
        <ReturnLayout />
    </ArticleProvider>
  )
}

export default Articles