import React, { useState } from 'react'
import { Play } from 'lucide-react'

const FeaturedVideo: React.FC = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Video</h2>
        <div className="relative aspect-video max-w-3xl mx-auto">
          {showVideo ? (
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              title="Featured Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div
              className="relative w-full h-full bg-cover bg-center cursor-pointer"
              style={{ backgroundImage: 'url("/placeholder.svg?height=720&width=1280")' }}
              onClick={() => setShowVideo(true)}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md p-4 rounded-lg text-center">
                  <Play className="h-16 w-16 text-primary mx-auto mb-2" />
                  <p className="text-lg font-semibold">
                    Click to watch a clip from my 2024 KNUST Professional Inaugural Lecture
                  </p>
                  <p className="text-sm text-gray-600">
                    A Journey in Statistical Inquisition
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default FeaturedVideo