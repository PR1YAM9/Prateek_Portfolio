import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
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
      <nav>
        <Link to="/">
          <img src={robot} className='title' alt="" />
        </Link>
        <div className={`menu ${menuOpen ? "rotate-90" : ""}`} onClick={() => setMenuOpen(!menuOpen)}>
          <img src={dot} alt=""/>
        </div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Projects</NavLink>
          </li>
          <li>
            <NavLink to="/">Contact</NavLink>
          </li>
          <li>
            <NavLink className="resume" to="/">Resume</NavLink>
          </li>
          {menuOpen && (
            <li>
              <div style={{display: 'flex', flexDirection: 'row', justifyContent:'center'}}>
                <NavLink className="openItems" to="/"><img src={linkedin} alt="" /></NavLink> 
                <NavLink className="openItems" to="/"><img src={github} alt="" /></NavLink> 
                <NavLink className="openItems" to="/"><img src={mail} alt="" /></NavLink> 
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
