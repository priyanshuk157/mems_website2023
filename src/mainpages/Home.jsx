import React from 'react'
import Navbar from '../components/navbar'
import Slider from '../components/Slider'
// import Cards from '../components/cards'
import Footer from '../components/footer'
import Section from '../components/section'
import "./home.css"


const Home = () => {
  return (
    <>
    <div className='body'>
    <div>
      <Navbar/>
    </div>
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
    <div>
      <Footer/>
    </div>
    </div>
    </>
  )
}

export default Home
