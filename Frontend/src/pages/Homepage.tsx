import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import RecentPoems from '../components/RecentPoems'

const Homepage = () => {
  return (
    <div>
        <Header/>
        <Carousel/>
        <RecentPoems/>
    </div>
  )
}

export default Homepage