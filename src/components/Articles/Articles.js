import React, {useState, useEffect} from 'react'
import { ArticleProvider } from '../../contexts/ArticleContext'
import ArticleLayout from './ArticleLayout'
import ArticleOverride from './ArticleOverride'

function Articles( { postOverride } ) {
  const [overrides, setOverrides] = useState([])

 if (postOverride) {
    async function override() {
      try {
        const response = await postOverride

        setOverrides(response.data)
      }
      catch(error) {
        console.log(`Overrides detected but not found, err: ${error}`);
      }
    }
    override()
  }
  
  const ReturnLayout = () => {
    return overrides.length > 0 ? <ArticleOverride postOverrides={overrides} /> : <ArticleLayout />
  }

  return (
    <ArticleProvider>
        <ReturnLayout />
    </ArticleProvider>
  )
}

export default Articles