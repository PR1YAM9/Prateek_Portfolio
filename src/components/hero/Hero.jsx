import React, { useEffect, useState } from 'react';
import './hero.css';
import Lottie from 'lottie-react'; 
import animationData from '../../images/pratik - scroll[1446].json';
import line from '../../images/Line 3.png';
import linee from '../../images/Line 2.png';
import lineePhoneL from '../../images/Line 3.svg';
import lineePhoneR from '../../images/Line 4.svg';




const Hero = ({ menuOpen }) => {
  
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 480);

  // Function to handle the window resize event
  const handleResize = () => {
    setIsMobile(window.innerWidth <= 480);
  };

  useEffect(() => {
    // Add event listener for the resize event
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="hero-container">
        <h1 className='hero-main'>ROBOTICS <br /> ENTHUSIAST</h1>
        <div>
        {isMobile && !menuOpen ? ( // Hide p1 on mobile when menuOpen is true
          <p className='hero-sub1 p1'>
            Hi ! I'm<br />
            <span style={{ fontWeight: 'bold' }}>Pratik Nikam.</span><br />
            <span className='fontg' style={{ color: '#0CA4E6' }}>from IIT Hyderabad</span>
          </p>
        ) : (
          !isMobile && !menuOpen && ( // Hide p1 on larger screens when menuOpen is true
            <p className='hero-sub1 p1'>
              Hi ! my name is <span style={{ fontWeight: "bold" }}>Pratik <br /> Nikam</span>. I am an Electrical Engineering student <br /> <span  className='fontg'  style={{ color: '#0CA4E6' }}>@IIT Hyderabad</span>
            </p>
          )
        )}
        {!menuOpen && (
          <p className='hero-sub1 p2'>
            Previously <span  className='fontg' style={{ color: '#0CA4E6' }}>Interned <br />@eYantra</span> , IIT Bombay
          </p>
          
        )}
        </div>
      </div>
      <div className="hero-container2">
        <div>
          <img className='linee' src={isMobile ? lineePhoneL : line} alt="" />
        </div>
        <div>
          <Lottie className='lottie' animationData={animationData} />
        </div> 
        <div>
          <img className='linee' src={isMobile ? lineePhoneR : linee} alt="" />
        </div>
      </div>
    
    </>
  )
}

export default Hero;
