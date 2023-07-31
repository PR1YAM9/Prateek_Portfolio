import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Link as ScrollLink } from "react-scroll";
import './navbar.css'
import robot from '../../images/robot logo.png'
import dot from '../../images/DotsThreeOutline.svg'
import mail from '../../images/mail.svg'
import github from '../../images/github.svg'
import linkedin from '../../images/linkedin.svg'
import Hero from '../hero/Hero'




const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    {menuOpen && <div className="overlay"></div>}
      <nav>
        <Link to="/">
          <img src={robot} className='title' alt="" />
        </Link>
        <div className={`menu ${menuOpen ? "rotate-90" : ""}`} 
        onClick={() => setMenuOpen(!menuOpen)}
        >
          <img className='dots' src={dot} alt=""/>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li style={{zIndex: 10}}>
          <ScrollLink
              className='link-spann'
              to="projects-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)}
            >
              Projects
            </ScrollLink>
          </li>
          <li>
          <ScrollLink
              className='link-spann'
              to="contact-section"
              smooth={true}
              duration={500}
              onClick={() => setMenuOpen(false)} // Close the menu after clicking the link
            >
              Contact
            </ScrollLink>
          </li>
          <li>
            <a className="resume" rel='noreferrer' target='_blank' href="https://file.notion.so/f/s/aeac85ee-87e9-4cc7-bdeb-fb5c8841b27a/Pratik_Nikam_Resume.pdf?id=72183e68-5581-4d57-8f91-ce1b8a8089ed&table=block&spaceId=2cf9760a-409c-49b1-9297-36fd6f6b1340&expirationTimestamp=1690761600000&signature=8ZwXCCoNRUIi2KojPs2KVzP-YeeEZf1rMo2fpBPiLMM&downloadName=Pratik_Nikam_Resume.pdf">Resume</a>
          </li>
          {menuOpen && (
            <li>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                <a className="openItems" rel='noreferrer' href="https://www.linkedin.com/in/pratik-nikam-83ab9822"><img src={linkedin} alt="" /></a> 
                <a className="openItems" rel='noreferrer' href="https://github.com/N-Pratik"><img src={github} alt="" /></a> 
                <a className="openItems" rel='noreferrer' href="mailto:ee21btech11037@iith.ac.in"><img src={mail} alt="" /></a> 
              </div>
            </li>
            )}
        </ul>
      </nav>
      <Hero menuOpen = {menuOpen}/>
    </>
  );
}

export default Navbar;
