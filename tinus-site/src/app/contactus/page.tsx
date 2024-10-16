'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Mail, Phone, MapPin, Linkedin, Twitter, FileText } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const ContactPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-100">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="container mx-auto px-4 py-12">
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="md:flex">
            <div className="md:w-1/2 p-8">
              <h1 className="text-4xl font-bold text-gray-800 mb-6">Get in Touch</h1>
              <p className="text-gray-600 mb-8">Feel free to reach out for collaborations, speaking engagements, or any inquiries.</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="text-primary h-6 w-6" />
                  <a href="mailto:tinuadebanji@gmail.com" className="text-gray-600 hover:text-primary">tinuadebanji@gmail.com</a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="text-primary h-6 w-6" />
                  <a href="tel:+233123456789" className="text-gray-600 hover:text-primary">+233 123 456 789</a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="text-primary h-6 w-6" />
                  <span className="text-gray-600">Department of Mathematics, KNUST, Kumasi, Ghana</span>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold text-gray-700 mb-4">Connect with me</h3>
                <div className="flex space-x-4">
                  <a href="https://www.linkedin.com/in/atinuke-adebanji" className="text-gray-600 hover:text-primary">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href="https://twitter.com/atinukeadebanji" className="text-gray-600 hover:text-primary">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-primary">
              <Image
                src="/images/home.jpg"
                alt="Professor Atinuke Adebanji"
                width={600}
                height={400}
                objectFit="cover"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-12 bg-white rounded-lg shadow-lg p-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2 className="text-2xl font-semibold text-gray-700 mb-6">Send a Message</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring focus:ring-primary focus:ring-opacity-50"></textarea>
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-dark transition duration-300">Send Message</button>
          </form>
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          
          <a 
            href="https://drive.google.com/file/d/12sBCl40lZpTffq8j6XobRbzx4g5u8q2G/view?usp=sharing" 
            className="inline-flex items-center bg-primary text-white py-3 px-8 rounded-md hover:bg-secondary-dark transition duration-300 text-lg font-semibold"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FileText className="mr-2 h-6 w-6" />
            View Resume
          </a>
        </motion.div>
      </main>
      <Footer />
    </div>
  )
}

export default ContactPage