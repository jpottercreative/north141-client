import React from 'react'
import { useHomepageContext } from '../../contexts/HomepageContext'

function HomepageLayout() {
    const {homepageData} = useHomepageContext()
    console.log(homepageData)
    
  return (
    <div>HomepageLayout</div>
  )
}

export default HomepageLayout