import React from 'react'

import Slider from '../components/Slider'
// import Cards from '../components/cards'

import Section from '../components/section'
import "./home.css"


const Home = () => {
  return (
    <>
    <div className='body'>
   
    <div className='slider-main'>
      <Slider/>
    </div>
    <div>
      <Section/>
    </div>
    {/* <div className='cards'>
      <Cards/>
      <Cards/>
      <Cards/>
      <Cards/>
    </div> */}
   
    </div>
    </>
  )
}

export default Home
