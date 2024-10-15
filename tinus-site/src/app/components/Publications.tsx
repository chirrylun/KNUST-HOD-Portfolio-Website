'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight, ArrowLeft } from 'lucide-react'
import { publications } from '../data/publications'

const Publications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 5
  const totalPages = Math.ceil(publications.length / itemsPerPage)

  const nextPage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex + itemsPerPage >= publications.length ? 0 : prevIndex + itemsPerPage
    )
  }

  const prevPage = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex - itemsPerPage < 0 ? publications.length - itemsPerPage : prevIndex - itemsPerPage
    )
  }

  return (
    <section className="py-24 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/2">
            <motion.h2 
              className="text-4xl font-bold mb-6 text-primary"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              My Publications
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/hols.jpg"
                alt="Prof. Atinuke Adebanji at a conference"
                layout="fill"
                objectFit="cover"
              />
            </motion.div>
          </div>
          <div className="md:w-1/2">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
              >
                {publications.slice(currentIndex, currentIndex + itemsPerPage).map((pub, index) => (
                  <motion.div
                    key={index}
                    className="mb-6 pb-6 border-b border-gray-200 last:border-b-0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <h3 className="text-lg font-semibold mb-2">{pub.authors}</h3>
                    <p className="text-gray-800 mb-2">{pub.title}</p>
                    <p className="text-sm text-gray-600 mb-2">{pub.description}</p>
                    <a
                      href={pub.link}
                      className="text-primary hover:underline flex items-center"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Read more <ChevronRight className="ml-1 h-4 w-4" />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-6">
              <motion.button
                onClick={prevPage}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="h-6 w-6 text-gray-600" />
              </motion.button>
              <motion.button
                onClick={nextPage}
                className="bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-6 w-6 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/publications"
            className="inline-flex items-center bg-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View other publications <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications