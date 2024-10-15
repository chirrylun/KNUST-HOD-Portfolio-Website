'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

const About: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Creative background design */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-black/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-black/10 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-black/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800">About Me</h2>
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full md:w-1/2"
            >
              <Image
                src="/images/speech-image.jpg"
                alt="Professor Atinuke Olusola Adebanji"
                width={500}
                height={500}
                className="rounded-lg shadow-2xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full md:w-1/2"
            >
              <p className="text-xl mb-6 text-gray-700">
                Atinuke Olusola Adebanji, a dedicated educator, imparting statistical expertise, fostering critical thinking and informed decision-making with quality data-analysis.
              </p>
              <p className="text-lg mb-8 text-gray-600">
                With the knowledge acquired across my experience in multidisciplinary fields in the space of statistics and data-analysis, I have been honored to speak and share my knowledge on professional and international stages.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">20+</div>
                  <p className="text-lg text-gray-700">Years of Experience in Statistics and Data Analysis</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black opacity-70 rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">50+</div>
                  <p className="text-lg text-gray-700">Published Research Papers</p>
                </div>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-black opacity-50  rounded-full flex items-center justify-center text-white text-2xl font-bold mr-4">100+</div>
                  <p className="text-lg text-gray-700">International Conference Presentations</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About