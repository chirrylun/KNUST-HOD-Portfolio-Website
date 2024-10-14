import React from 'react'
import Link from 'next/link'

type NavLinkProps = {
  href: string
  children: React.ReactNode
  isActive?: boolean
}

const NavLink: React.FC<NavLinkProps> = ({ href, children, isActive = false }) => {
  return (
    <Link
      href={href}
      className={`text-lg ${
        isActive ? 'text-primary font-semibold' : 'text-gray-600 hover:text-primary'
      } transition-colors`}
    >
      {children}
    </Link>
  )
}

export default NavLink