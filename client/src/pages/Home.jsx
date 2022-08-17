import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement.jsx'
import Slider from '../components/Slider.jsx'
import Category from '../components/Catergories'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
    </div>
  )
}

export default Home
