import React from 'react'
import HeroSection from '../components/Hero/HeroSection'
import HomepageLayout from '../components/Homepage/HomepageLayout'
import { HomepageProvider } from '../contexts/HomepageContext'

function Homepage() {
  return (
    <HomepageProvider>
        <HomepageLayout />
        
    </HomepageProvider>
  )
}

export default Homepage