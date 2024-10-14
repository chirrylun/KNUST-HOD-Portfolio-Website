import React from 'react'
import Link from 'next/link'

const Contact: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
        <p className="text-xl text-gray-600 mb-8">Feel free to reach out!</p>
        <div className="space-x-4">
          <Link
            href="https://drive.google.com/file/d/12sBCl40lZpTffq8j6XobRbzx4g5u8q2G/view?usp=sharing"
            className="inline-block bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
          >
            View Resume
          </Link>
          <Link
            href="/contact"
            className="inline-block bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-secondary/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Contact