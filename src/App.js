import React from 'react'
import './App.css'
// import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Project from './components/projectss/Project'
import Last from './components/Last/Last' 
import Footer from './components/footer/Footer'


const App = () => {
  return (
    <>
      <Navbar/>
      <Project/>
      <Last/>
      <Footer/>
    </>
  )
}

export default App