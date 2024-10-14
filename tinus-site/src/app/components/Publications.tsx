import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import { Publication } from '../types/types'

type PublicationsProps = {
  publications: Publication[]
}

const Publications: React.FC<PublicationsProps> = ({ publications }) => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">My Publications</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-lg font-semibold mb-2">{pub.authors}</h3>
              <p className="text-gray-800 mb-2">{pub.title}</p>
              <p className="text-sm text-gray-600 mb-4">{pub.description}</p>
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
        </div>
        <div className="text-center mt-8">
          <Link
            href="/publications"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View All Publications
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Publications