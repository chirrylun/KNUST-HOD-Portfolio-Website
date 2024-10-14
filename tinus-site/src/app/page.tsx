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
import { Publication, Event } from './types/types'

export default function Page() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const backgroundImages = [
    '/tinus-site/src/public/images/cover.jpg',
    '/tinus-site/src/public/images/gradimage.jpg',
    
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % backgroundImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const publications: Publication[] = [
    // ... (publication data)
  ]

  const events: Event[] = [
    // ... (event data)
  ]

  return (
    <div className="relative min-h-screen bg-gray-100">
      {/* Background images */}
      <div className="absolute inset-0 z-0">
        {backgroundImages.map((image, index) => (
          <div
            key={index}
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${image})`,
              opacity: currentImageIndex === index ? 1 : 0,
              transition: 'opacity 1s'
            }}
          />
        ))}
      </div>
      <div className="relative z-10">
        <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
        <main>
          <Hero />
          <FeaturedVideo />
          <About />
          <Quote />
          <OtherEngagements events={events} />
          <Publications publications={publications} />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  )
}