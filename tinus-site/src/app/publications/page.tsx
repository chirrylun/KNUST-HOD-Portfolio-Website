"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import {
  ChevronRight,
  ArrowRight,
  ArrowLeft,
  Book,
  Award,
  FileText,
} from "lucide-react";
import { publications } from "../data/publications";

const PublicationCard: React.FC<{ publication: any }> = ({ publication }) => (
  <motion.div
    className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <Book className="h-6 w-6 text-primary mr-2" />
        <p className="text-sm text-gray-500">{publication.year}</p>
      </div>
      <h3 className="text-xl font-bold mb-2 line-clamp-2">
        {publication.title}
      </h3>
      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
        {publication.authors}
      </p>
      <p className="text-sm text-gray-500 mb-4 line-clamp-3">
        {publication.description}
      </p>
      <a
        href={publication.link}
        className="inline-flex items-center text-primary hover:underline font-semibold"
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more <ChevronRight className="ml-1 h-4 w-4" />
      </a>
    </div>
  </motion.div>
);

const OtherEngagements: React.FC = () => (
  <div className="bg-white grid grid-cols-1 md:grid-cols-2 gap-6 rounded-xl shadow-lg p-6 mt-12">
    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
        <Award className="h-6 w-6 text-primary mr-2" />
        Other Engagements
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Interviews</h3>
          <p className="text-gray-600 mb-2">
            Hosting the LISA 2020 Project to train Power Distribution Service
            Workers(PDS), KNUST, Ghana.
          </p>
          <a
            href="https://youtu.be/6LtzBFpRXx4"
            className="text-primary hover:underline inline-flex items-center"
          >
            Watch <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Blogs & Articles</h3>
          <p className="text-gray-600 mb-2">Supporting Women Scientists</p>
          <a
            href="https://medium.com/usaid-2030/supporting-women-scientists-edab01628e69"
            className="text-primary hover:underline inline-flex items-center"
          >
            Read Article <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>

    <div>
      <h2 className="text-2xl font-bold mb-6 flex items-center">
      <Book className="h-6 w-6 text-primary mr-2" />
        Other Publications
      </h2>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-semibold mb-2">Publications</h3>
          <p className="text-gray-600 mb-2">
            Research Gate Publications.
          </p>
          <a
            href="https://www.researchgate.net/profile/Atinuke-Adebanji"
            className="text-primary hover:underline inline-flex items-center"
          >
            Read <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div>

          <p className="text-gray-600 mb-2">KNUST Academia Publications</p>
          <a
            href="https://knust.academia.edu/AtinukeOAdebanji"
            className="text-primary hover:underline inline-flex items-center"
          >
            Read <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
        <div>

          <p className="text-gray-600 mb-2">More Publications</p>
          <a
            href="https://docs.google.com/document/d/e/2PACX-1vS4m4pme47iImfci-_RSb06vqrj-1fS6LoGF0SXYUi0W5N1ltAEJQuXvU4wtptNqQ/pub"
            className="text-primary hover:underline inline-flex items-center"
          >
            Read <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  </div>
);

const PublicationsPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const publicationsPerPage = 6;
  const indexOfLastPublication = currentPage * publicationsPerPage;
  const indexOfFirstPublication = indexOfLastPublication - publicationsPerPage;
  const currentPublications = publications.slice(
    indexOfFirstPublication,
    indexOfLastPublication
  );

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-opacity-50 z-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-black/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-128 h-128 bg-secondary/10 rounded-full translate-x-1/3 translate-y-1/3" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      </div>
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main className="container mx-auto px-4 py-12 relative z-10">
        <motion.h1
          className="text-5xl font-bold text-center mb-12 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Publications
        </motion.h1>
        <div className="flex flex-col gap-12">
          <motion.div
            className="lg:w-full"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="sticky top-24">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
                <img
                  src="/images/award.jpg"
                  alt="Award"
                  className="w-full h-3/4 object-cover"
                />
                <div className="p-6">
                  <h2 className="text-2xl font-bold mb-2 flex items-center">
                    <FileText className="h-6 w-6 text-primary mr-2" />
                    Research Highlights
                  </h2>
                  <p className="text-gray-600">
                    Explore my latest research and publications in statistics
                    and data analysis.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
          <div className="lg:w-full">
            <AnimatePresence>
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="grid md:grid-cols-2 gap-6"
              >
                {currentPublications.map((pub, index) => (
                  <PublicationCard key={index} publication={pub} />
                ))}
              </motion.div>
            </AnimatePresence>
            <div className="flex justify-between mt-12">
              <motion.button
                onClick={() => paginate(currentPage - 1)}
                disabled={currentPage === 1}
                className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <ArrowLeft className="h-5 w-5 mr-2" /> Previous
              </motion.button>
              <motion.button
                onClick={() => paginate(currentPage + 1)}
                disabled={indexOfLastPublication >= publications.length}
                className="bg-black text-white px-6 py-3 rounded-lg disabled:opacity-50 flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Next <ArrowRight className="h-5 w-5 ml-2" />
              </motion.button>
            </div>
          </div>
          <OtherEngagements />
          <Contact/>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PublicationsPage;
