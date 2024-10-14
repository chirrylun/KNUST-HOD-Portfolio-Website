import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import NavLink from './NavLink'

type HeaderProps = {
  isMenuOpen: boolean
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header: React.FC<HeaderProps> = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <header className="bg-white/80 backdrop-blur-md sticky top-0">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
          <Image src="/images/header.png" alt="Logo" width={50} height={50} className="rounded-full" />
            <h2 className="ml-3 text-xl font-semibold text-gray-800">Prof. Atinuke Adebanji</h2>
          </div>
          <div className="hidden md:flex space-x-4">
            <NavLink href="/" isActive>My Bio</NavLink>
            <NavLink href="/publications">My Publications</NavLink>
            <NavLink href="/events">Programs & Events</NavLink>
            <NavLink href="/contact">Get in Touch</NavLink>
          </div>
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6 text-gray-800" /> : <Menu className="h-6 w-6 text-gray-800" />}
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="p-6">
              <button className="mb-6" onClick={() => setIsMenuOpen(false)}>
                X
                <X className="h-6 w-6 text-gray-800" />
              </button>
              <div className="space-y-4">
                <NavLink href="/" isActive>My Bio</NavLink>
                <NavLink href="/publications">My Publications</NavLink>
                <NavLink href="/events">Programs & Events</NavLink>
                <NavLink href="/contact">Get in Touch</NavLink>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header