"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Mail, Linkedin, ExternalLink } from "lucide-react";

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const backgroundImages = ["/images/cover.jpg", "/images/gradimage.jpg"];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <AnimatePresence>
        {backgroundImages.map((image, index) => (
          <motion.div
            key={image}
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: currentImageIndex === index ? 1 : 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          />
        ))}
      </AnimatePresence>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-between">
          <motion.div
            className="md:w-1/2 text-center md:text-left text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Prof. Atinuke Olusola Adebanji
            </h1>
            <p className="text-xl mb-6">
              A Seasoned Statistics and Biostatistics Expert
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-4 mb-6 text-center">
              <Link
                href="https://drive.google.com/file/d/12sBCl40lZpTffq8j6XobRbzx4g5u8q2G/view?usp=sharing"
                className="inline-block bg-white bg-opacity-15 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
                View My Resume
              </Link>
              <Link
                href="https://webapps.knust.edu.gh/staff/dirsearch/profile/summary/bc635c81f607.html"
                className="flex bg-white bg-opacity-15 text-white px-6 py-3 rounded-lg font-semibold items-center justify-center transition-colors"
              >
                View My KNUST Profile <ExternalLink className="ml-2 h-4 w-4" />
              </Link>
            </div>
            <div className="flex justify-center md:justify-start space-x-4 mb-6">
              <a
                href="https://www.linkedin.com/in/atinuke-adebanji"
                className="text-white hover:text-primary transition-colors"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                href="mailto:adebanji.1@osu.edu"
                className="text-white hover:text-primary transition-colors"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          <motion.div
            className="w-full md:w-1/2 mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-lg p-6 text-white">
              <h2 className="text-2xl font-semibold mb-4">
                Current Institution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="mb-2">Department of Statistics</p>
                  <p className="mb-2">Cockins Hall</p>
                  <p className="mb-2">Ohio State University</p>
                  <p className="mb-2">2009 Millin Rd</p>
                  <p className="mb-4">Columbus, OH 43210-1243</p>
                </div>
                <div>
                  <p className="mb-2">
                    <strong>Position:</strong> Exchange Scholar
                  </p>
                  <p className="mb-2">
                    <strong>Email:</strong> adebanji.1@osu.edu
                  </p>
                  <p className="mb-4">
                    <strong>Host:</strong> Prof Shili Lin
                  </p>
                </div>
              </div>

              
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
