import React from 'react'
import Slider from '../../components/Slider/Slider'
import FeaturedProducts from '../FeaturedProducts/FeaturedProducts'

import Categories from '../../components/Categories/Categories'
import Contact from '../../components/Contact/Contact'

const Home = () => {
  return (
    <div className='home'>
      <Slider/>
      <FeaturedProducts type="featured"/>
      <FeaturedProducts type="trending"/>
      <Categories/>
      <FeaturedProducts type = "normal"/>
      <Contact/>
      </div>
  )
}

export default Home