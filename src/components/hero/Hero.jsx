import React from 'react'
import './hero.css'
import Navbar from '../navbar/Navbar'

const Hero = () => {
  return (
    <>
        <Navbar/>
        <div className="hero-container">
            <h1 className='hero-main'>ROBOTICS <br /> ENTHUSIAST</h1>
        </div>
    </>
  )
}

export default Hero