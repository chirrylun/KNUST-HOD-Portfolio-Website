'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, ArrowRight, ArrowLeft, BookOpen, Calendar, Users } from 'lucide-react'
import { publications } from '../data/publications'

const PublicationCard: React.FC<{ publication: any; index: number }> = ({ publication, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="p-6 relative">
      <div className="absolute top-0 right-0 w-24 h-24 bg-primary/10 rounded-bl-full z-0" />
      <div className="relative z-10">
        <div className="flex items-center mb-4 text-primary">
          <BookOpen className="h-6 w-6 mr-2" />
          <p className="text-sm font-semibold">{publication.type}</p>
        </div>
        <h3 className="text-lg font-bold mb-2 line-clamp-2">{publication.title}</h3>
        <div className="flex items-center mb-2 text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <p className="text-sm line-clamp-1">{publication.authors}</p>
        </div>
        <div className="flex items-center mb-4 text-gray-500">
          <Calendar className="h-4 w-4 mr-2" />
          <p className="text-sm">{publication.year}</p>
        </div>
        <p className="text-sm text-gray-600 mb-4 line-clamp-2">{publication.description}</p>
        <a
          href={publication.link}
          className="inline-flex items-center text-primary hover:underline font-semibold"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  </motion.div>
)

const Publications: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 4
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
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-200 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row gap-12">
          <motion.div 
            className="lg:w-1/3"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-800">My Publications</h2>
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/hols.jpg"
                alt="Prof. Atinuke Adebanji at a conference"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">Publication Highlights</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  20+ peer-reviewed articles
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  5 book chapters
                </li>
                <li className="flex items-center">
                  <ChevronRight className="h-4 w-4 text-primary mr-2" />
                  10+ conference papers
                </li>
              </ul>
            </div>
          </motion.div>
          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {publications.slice(currentIndex, currentIndex + itemsPerPage).map((pub, index) => (
                  <PublicationCard key={index} publication={pub} index={index} />
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-8">
              <motion.button
                onClick={prevPage}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowLeft className="h-6 w-6 text-gray-600" />
              </motion.button>
              <motion.button
                onClick={nextPage}
                className="bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ArrowRight className="h-6 w-6 text-gray-600" />
              </motion.button>
            </div>
          </div>
        </div>
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <Link
            href="/publications"
            className="inline-flex items-center bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg shadow-lg"
          >
            View All Publications <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Publications