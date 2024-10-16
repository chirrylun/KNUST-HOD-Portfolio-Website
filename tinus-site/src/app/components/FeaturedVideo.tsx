'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X } from 'lucide-react'

const FeaturedVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false)
  const videoId = '3wncVnh9a8M' // Replace with your actual video ID
  const startTime = 3288 // Replace with your desired start time in seconds

  return (
    <section className="py-12 md:py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-accent/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      
      <motion.div 
        className="container mx-auto px-4 sm:px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative aspect-video max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl bg-white">
          <AnimatePresence>
            {showVideo ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${videoId}?start=${startTime}&autoplay=1`}
                  title="Featured Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <motion.button
                  className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/80 backdrop-blur-md p-2 rounded-full text-gray-800 hover:bg-white transition-colors"
                  onClick={() => setShowVideo(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <X className="h-4 w-4 sm:h-6 sm:w-6" />
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("/placeholder.svg?height=720&width=1280")' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div 
                    className="text-center px-4 sm:px-0"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <motion.button
                      className="bg-white/90 backdrop-blur-md p-4 sm:p-6 rounded-full text-primary hover:text-secondary transition-colors mb-4 sm:mb-6"
                      onClick={() => setShowVideo(true)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Play className="h-12 w-12 sm:h-20 sm:w-20" />
                    </motion.button>
                    <h3 className="text-xl sm:text-3xl font-bold text-white mb-2">
                      2024 KNUST Professional Inaugural Lecture
                    </h3>
                    <p className="text-lg sm:text-xl text-white/90 mb-2 sm:mb-4">
                      A Journey in Statistical Inquisition
                    </p>
                    <p className="text-base sm:text-lg text-white font-semibold">
                      Click to Watch
                    </p>
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
      
      <svg className="absolute bottom-0 left-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  )
}

export default FeaturedVideo