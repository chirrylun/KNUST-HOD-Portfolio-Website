import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Quote: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Prof. Adebanji speaking"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <blockquote className="text-xl italic">
              "Teaching, to me, is not just a profession; it's a profound opportunity to ignite curiosity, empower critical thinking, and inspire a lifelong passion for statistical knowledge. I understand that statistics can appear formidable with its complex mathematical aspects, but I firmly believe that it is an indispensable tool for nurturing analytical minds."
            </blockquote>
            <Link
              href="/events"
              className="inline-block mt-6 bg-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              View More Events
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Quote