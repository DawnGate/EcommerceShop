import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement.jsx'
import Slider from '../components/Slider.jsx'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
    </div>
  )
}

export default Home
