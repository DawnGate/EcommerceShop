import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement.jsx'
import Slider from '../components/Slider.jsx'
import Category from '../components/Catergories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <Slider />
      <Category />
      <Products />
      <Newsletter />
    </div>
  )
}

export default Home
