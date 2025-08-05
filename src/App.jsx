import React from 'react'
import Navbar from './Component/Navbar'
import Button from './Component/Button'

import Hero from './Component/Hero'
import About from './Component/About'
import Skill from './Component/Skill'
import Project from './Component/Project'

const App = () => {
  return (
    <div className="bg-[#0c1d2c] ">
      <Navbar/>
      <Hero/>
      <About/>
      <Skill/>
      <Project/>
   
    </div>
  )
}

export default App
