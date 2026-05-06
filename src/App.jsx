import React from 'react'
import Navbar from './Component/Navbar'
import Button from './Component/Button'
 
import Hero from './Component/Hero'
import About from './Component/About'
import Skill from './Component/Skill'
import Project from './Component/Project'
import Contact from './Component/Contact'
import Footer from './Component/Footer'
import MiniSphere from './Component/MiniSphere'

const App = () => {
  return (
    <div className="bg-[#0c1d2c] ">
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
      <div className='flex items-center justify-center'>
          <MiniSphere/>

      </div>
    
      <Contact/>
      <Footer/>
   
    </div>
  )
}

export default App
