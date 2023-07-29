import React from 'react'
import './Footer.css'
import git from '../../images/github.png';
import email from '../../images/email.png';
import linkd from '../../images/linkedin.png';
import quat from '../../images/ArrowSquareOut.png';

export default function Footer() {
  return (
    <div className='outer1'>
        <div className='first1'>
            <a className='links' href="https://github.com/N-Pratik"> <img className='logos' src={git} alt="" /> <span className='link-span'>Github</span></a>
            <a className='links' href="mailto:ee21btech11037@iith.ac.in"> <img className='logos' src={email}  alt="" /> <span className='link-span'> Email</span></a>
            <a className='links' href="https://www.linkedin.com/in/pratik-nikam-83ab98223"> <img className='logos' src={linkd} alt="" /> <span className='link-span'> Linkedin</span></a>
        </div>
        <div className="line"></div>
        <div className='second1'>
            <div className='rights'>
            © Copyright 2023 by Pratik Nikam. All rights reserved <span className='footer-slash'> |</span>&nbsp;<a className='quatro' href="https://www.quatro.in/"> Created by quatro <img className='quatro-link' src={quat} alt="" /> </a> 
            </div>
        </div>
    </div>
  )
}
