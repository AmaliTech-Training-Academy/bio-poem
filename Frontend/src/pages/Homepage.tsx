import React from 'react'
import Header from '../components/Header'
import Carousel from '../components/Carousel'
import RecentPoems from '../components/RecentPoems'
import SideBar from '../components/SideBar'

const Homepage = () => {
  return (
    <div className='flex'>
        <SideBar/>
        <div>
        <Header/>
        <Carousel/>
        <RecentPoems/>
        </div>
        </div>
    )
}
export default Homepage