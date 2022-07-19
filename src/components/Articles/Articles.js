import React, {useState, useEffect} from 'react'
import ArticleGrid from './ArticleGrid'
import { ArticleProvider } from '../../contexts/ArticleContext'
import ArticleLayout from './ArticleLayout'


function Articles() {


  return (
    <ArticleProvider>
        <ArticleLayout />
    </ArticleProvider>
  )
}

export default Articles