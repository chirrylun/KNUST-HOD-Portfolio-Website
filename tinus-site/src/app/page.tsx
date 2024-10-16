'use client'
import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import FeaturedVideo from './components/FeaturedVideo'
import About from './components/About'
import Quote from './components/Quote'
import OtherEngagements from './components/OtherEngagements'
import Publications from './components/Publications'
import Contact from './components/Contact'
import Footer from './components/Footer'

import { Event } from './types/types'

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  

 

  

  return (
    <div className="relative min-h-screen  bg-gray-100">
      
      <div className="relative z-10">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <FeaturedVideo />
          <About />
          <Quote />
          <OtherEngagements/>
          <Publications/>
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}