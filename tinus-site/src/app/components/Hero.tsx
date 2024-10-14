import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { Mail, Play } from 'lucide-react'

const Hero: React.FC = () => {
  return (
    <section className="container mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Prof. Atinuke Olusola Adebanji
          </h1>
          <p className="text-xl text-gray-700 mb-6">
            A Seasoned Statistics and Biostatistics Expert
          </p>
          <div className="space-x-4">
            <Link
              href="https://drive.google.com/file/d/12sBCl40lZpTffq8j6XobRbzx4g5u8q2G/view?usp=sharing"
              className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View My Resume
            </Link>
            <Link
              href="#"
              className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
            >
              View My Profile
            </Link>
          </div>
          <div className="mt-6 space-x-4">
            <a href="https://www.linkedin.com/in/atinuke-adebanji" className="text-gray-600 hover:text-primary">
              LinkedIn
            </a>
            <a href="mailto:tinuadebanji@gmail.com" className="text-gray-600 hover:text-primary">
              <Mail className="inline-block h-6 w-6" />
            </a>
          </div>
        </motion.div>
        <motion.div
          className="md:w-1/2 mt-8 md:mt-0"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative">
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Prof. Atinuke Adebanji"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
            <div className="absolute bottom-0 right-0 bg-white p-3 rounded-full shadow-lg">
              <Play className="h-8 w-8 text-primary" />
            </div>
          </div>
          <p className="text-center mt-4 text-gray-600">Tap for a guided walkthrough</p>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero