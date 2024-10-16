'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight } from 'lucide-react'
import { Event } from '../types/types'
import { events } from '../data/events'

const OtherEngagements: React.FC = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl text-primary font-bold text-center mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Other Engagements
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          View my Research, Workshops, Awards and other professional engagements.
        </motion.p>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48">
                <Image
                  src={event.imagePath || "/placeholder.svg?height=300&width=400"}
                  alt={event.title}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white">{event.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-2 font-semibold">{event.subtitle}</p>
                <p className="text-sm mb-4 text-gray-500">{event.description}</p>
                <Link
                  href={event.link}
                  className="inline-flex items-center text-primary hover:underline font-semibold"
                >
                  View More <ChevronRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default OtherEngagements