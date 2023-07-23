import React from 'react';
import './hero.css';
// import pratik from '../../images/pratik - scroll[1446].json';

const Hero = ({ menuOpen }) => {
  const isMobile = window.innerWidth <= 480; // Check if the window width is 480px or smaller
  return (
    <>
      <div className="hero-container">
        <h1 className='hero-main'>ROBOTICS <br /> ENTHUSIAST</h1>
        <div>
        {isMobile && !menuOpen ? ( // Hide p1 on mobile when menuOpen is true
          <p className='hero-sub1 p1'>
            Hi ! I'm<br />
            <span style={{ fontWeight: 'bold' }}>Pratik Nikam.</span><br />
            <span style={{ color: '#0CA4E6' }}>from IIT Hyderabad</span>
          </p>
        ) : (
          !isMobile && !menuOpen && ( // Hide p1 on larger screens when menuOpen is true
            <p className='hero-sub1 p1'>
              Hi ! my name is <span style={{ fontWeight: "bold" }}>Pratik <br /> Nikam</span>. I am an Electrical Engineering student <br /> <span style={{ color: '#0CA4E6' }}>@IIT Hyderabad</span>
            </p>
          )
        )}
        {!menuOpen && ( // Hide p2 when menuOpen is true
          <p className='hero-sub1 p2'>
            Previously <span style={{ color: '#0CA4E6' }}>Interned <br />@eYantra</span> , IIT Bombay
          </p>
          
        )}
        </div>
      </div>
    </>
  )
}

export default Hero;
