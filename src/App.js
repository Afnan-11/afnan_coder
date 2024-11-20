import './App.css'
import React from 'react'
import Navbar from './components/global/Navbar'
import HeroSection from './components/home/HeroSection'
import About from './components/home/About'
import Skills from './components/home/Skills'
import Services from './components/home/Services'
import Portfolio from './components/home/Portfolio'
import Connect from './components/home/Connect'
import LastSection from './components/home/LastSection'
import 'animate.css';


function App() {
  return (
    <>
      <Navbar />
      <div id='hero'>
        <HeroSection />
      </div>
      <div id='about'>
        <About />
      </div>
      <div id='skills'>
        <Skills />
      </div>
      <div id='services'>
        <Services />
      </div>
      <div id='portfolio'>
        <Portfolio />
      </div>
      <div id='connect'>
        <Connect />
      </div>
      <LastSection/>
    </>
  )
}

export default App
