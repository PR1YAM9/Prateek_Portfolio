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
            <div><a className='links' href="/"> <img className='logos' src={git} alt="" /> Github</a></div>
            <div><a className='links' href="/"> <img className='logos' src={email}  alt="" /> Email</a></div>
            <div><a className='links' href="/"> <img className='logos' src={linkd} alt="" /> Linkedin</a></div>
        </div>
        <div className='second1'>
            © Copyright 2023 by Pratik Nikam. All rights reserved  | <a className='quatro' href="/">Created by quatro <img src={quat} alt="" /> </a> 
        </div>
    </div>
  )
}
