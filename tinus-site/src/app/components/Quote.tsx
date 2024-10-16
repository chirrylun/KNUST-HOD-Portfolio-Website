'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { Quote as QuoteIcon } from 'lucide-react'

const Quote: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-primary/10 to-secondary/10">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/20 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/20 rounded-full translate-x-1/3 translate-y-1/3" />
      
      <motion.div 
        className="container mx-auto px-6 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-12">
            <QuoteIcon className="w-16 h-16 text-primary mb-8" />
            <blockquote className="text-2xl md:text-3xl font-serif italic text-gray-800 mb-8 leading-relaxed">
              "Teaching, to me, is not just a profession; it&apos;s a profound opportunity to ignite curiosity, empower critical thinking, and inspire a lifelong passion for statistical knowledge. I understand that statistics can appear formidable with its complex mathematical aspects, but I firmly believe that it is an indispensable tool for nurturing analytical minds."
            </blockquote>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-between">
              <div>
                <p className="text-xl font-semibold text-gray-900">Prof. Atinuke Olusola Adebanji</p>
                <p className="text-gray-600">Statistics and Biostatistics Expert</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/events"
                  className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  View More Events
                </Link>
              </motion.div>
            </div>
          </div>
          <div className="h-2 bg-gradient-to-r from-primary via-secondary to-accent" />
        </div>
      </motion.div>

      <svg className="absolute bottom-0 left-0 w-full h-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#ffffff" fillOpacity="1" d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </section>
  )
}

export default Quote