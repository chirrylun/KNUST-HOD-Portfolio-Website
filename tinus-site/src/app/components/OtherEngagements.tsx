import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Event } from '../types/types'

type OtherEngagementsProps = {
  events: Event[]
}

const OtherEngagements: React.FC<OtherEngagementsProps> = ({ events }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-4">Other Engagements</h2>
        <p className="text-center text-gray-600 mb-8">
          View my Research, Workshops, Awards and other professional engagements.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.subtitle}</p>
                <p className="text-sm mb-4">{event.description}</p>
                <Link
                  href={event.link}
                  className="text-primary hover:underline flex items-center"
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