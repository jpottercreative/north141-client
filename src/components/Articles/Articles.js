import React, {useState, useEffect} from 'react'
import { ArticleProvider } from '../../contexts/ArticleContext'
import ArticleLayout from './ArticleLayout'


function Articles( { postOverride } ) {

  console.log(postOverride)
  let parsedPostOverride = []
  return (
    <ArticleProvider>
        <ArticleLayout postOverride={parsedPostOverride}/>
    </ArticleProvider>
  )
}

export default Articles