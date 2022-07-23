import React, {useState, useEffect} from 'react'
import { ArticleProvider } from '../../contexts/ArticleContext'
import ArticleLayout from './ArticleLayout'


function Articles( { postOverride } ) {

  if (postOverride) console.log(`postOverride received: ` + postOverride)

  let parsedPostOverride = []
  return (
    <ArticleProvider>
        <ArticleLayout postOverride={parsedPostOverride}/>
    </ArticleProvider>
  )
}

export default Articles