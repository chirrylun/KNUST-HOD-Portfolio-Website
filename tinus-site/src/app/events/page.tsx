'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown, ChevronUp, Award, BookOpen, Calendar, FlaskConical, Gift, Briefcase } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Contact from '../components/Contact'

interface Event {
  title: string
  description?: string
  details: string[]
}

interface EventSectionProps {
  title: string
  events: Event[]
  image: string
  icon: React.ReactNode
}

const EventCard: React.FC<{ event: Event; index: number }> = ({ event, index }) => (
  <motion.div
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <div className="p-6 relative">
      
      <div className="relative z-10">
        <h3 className="font-semibold text-primary text-lg mb-2">{event.title}</h3>
        {event.description && <p className="text-gray-600 mb-2">{event.description}</p>}
        <ul className="list-disc list-inside text-sm text-gray-500">
          {event.details.map((detail, detailIndex) => (
            <li key={detailIndex}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
)

const EventSection: React.FC<EventSectionProps> = ({ title, events, image, icon }) => {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex items-center justify-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="bg-white p-3 rounded-full shadow-md mr-4">
            {icon}
          </div>
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
        </motion.div>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="relative h-96 lg:h-full rounded-lg overflow-hidden shadow-xl"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Image src={image} alt={title} layout="fill" objectFit="cover" />
          </motion.div>
          <div>
            <AnimatePresence>
              <motion.div
                key={isExpanded ? 'expanded' : 'collapsed'}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="grid gap-6">
                  {events.slice(0, isExpanded ? events.length : 3).map((event, index) => (
                    <EventCard key={index} event={event} index={index} />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
            {events.length > 3 && (
              <motion.button
                className="mt-8 flex items-center justify-center w-full bg-primary text-white py-3 px-6 rounded-md font-semibold hover:bg-primary-dark transition-colors"
                onClick={() => setIsExpanded(!isExpanded)}
                whileHover={{ scale: 0.98 }}
                whileTap={{ scale: 0.95 }}
              >
                {isExpanded ? (
                  <>
                    Show Less <ChevronUp className="ml-2 h-5 w-5" />
                  </>
                ) : (
                  <>
                    Show More <ChevronDown className="ml-2 h-5 w-5" />
                  </>
                )}
              </motion.button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

const EventsPage: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <div className="min-h-screen bg-gray-100">
      <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <main>
        <EventSection
          title="Fellowships & Awards"
          events={fellowshipsAndAwards}
          image="/images/aw.jpg"
          icon={<Award className="h-8 w-8 text-primary" />}
        />
        <EventSection
          title="Workshops"
          events={workshops}
          image="/images/work.jpg"
          icon={<BookOpen className="h-8 w-8 text-primary" />}
        />
        <EventSection
          title="Programs"
          events={programs}
          image="/images/ev2.jpg"
          icon={<Calendar className="h-8 w-8 text-primary" />}
        />
        <EventSection
          title="Research"
          events={research}
          image="/images/research.jpg"
          icon={<FlaskConical className="h-8 w-8 text-primary" />}
        />
        <EventSection
          title="Grants"
          events={grants}
          image="/images/grant.jpg"
          icon={<Gift className="h-8 w-8 text-primary" />}
        />
        <EventSection
          title="Projects"
          events={projects}
          image="/images/event1.jpg"
          icon={<Briefcase className="h-8 w-8 text-primary" />}
        />
      </main>
      <Contact/>
      <Footer />
    </div>
  )
}

export default EventsPage

const fellowshipsAndAwards: Event[] = [
  {
    title: 'Fellowship of the Ghana Academy of Arts and Sciences',
    description: 'Member by Election, 2025',
    details: [
      'Inducted at the GAAS Auditorium, Casely Hayford Road, Accra',
    ]
  },
  {
    title: 'Member, Governing Council of the International Biometric Society',
    description: 'Ghana Representative',
    details: [
      'Elected Member, International Statistical Institute; 2020',
      'Senior Research Scientist Fellowship of Women for Africa Foundation',
      'Fellow, African Scientific Institute; 2016 – Date'
    ]
  },
  {
    title: 'Association of African Universities staff exchange fellowship',
    description: 'Utilized at the Department of Applied Mathematics, University for Development Studies',
    details: ['2009']
  },
  {
    title: 'World Organization for Women in Science one-year postgraduate Fellowship award',
    description: 'Utilized at the School of Mathematics, University of Nairobi, Kenya',
    details: ['2007 - 2008']
  }
]

const workshops: Event[] = [
  {
    title: 'Transforming Evidence to Action, Capacity in Higher Education (TEACH)',
    description: 'Capacity building workshop for the Regional Transport Research and Education Centre, Kumasi (TRECK)',
    details: []
  },
  {
    title: 'Applied Bayesian School (ABS17)',
    description: 'Villa del Grumello, Como (Italy)',
    details: ['June 19 - 23, 2017']
  },
  {
    title: 'LISA 2020 Global Sustainability Symposium',
    details: ['01-05 May 2022']
  },
  {
    title: '30th International Biometric Conference (IBC 2020)',
    details: ['Sept to Oct 2020']
  },
  {
    title: 'Virtual Third LISA 2020 symposium',
    description: 'Building Capacity to Transform Evidence to Action',
    details: ['Nov – Dec 2020']
  }
]

const programs: Event[] = [
  {
    title: '64th World Statistics Congress of the International Statistical Institute (WSC-ISI2023)',
    description: 'Ottawa, Canada',
    details: ['16th to 20th July 2023']
  },
  {
    title: '31st International Biometric Conference (IBC2022)',
    description: 'Riga, Latvia',
    details: ['10th to 15th July 2022']
  },
  {
    title: 'International Statistical Institute (ISI) 62nd World Statistics Congress, 2019',
    description: 'Kuala Lumpur',
    details: ['18-23 August 2019']
  },
  {
    title: 'Meeting of World Women in Mathematics',
    description: 'Rio de Janeiro, Brazil',
    details: ['July 31, 2018']
  },
  {
    title: 'International Congress of Mathematics',
    description: 'Rio de Janeiro, Brazil',
    details: ['August 1-9, 2018']
  }
]

const research: Event[] = [
  {
    title: 'Building Capacity of Female Scientists in Data Analysis for Decision making and Strategic Planning',
    details: []
  },
  {
    title: 'Nonlinear multi-block data analysis',
    details: ['2022-date']
  },
  {
    title: 'SEM model for pedestrian safety on motorways',
    details: ['2022']
  },
  {
    title: 'Modeling of vehicular traffic emissions and its implications on public health for selected roadways in Lagos, Nigeria',
    description: 'A West African city',
    details: ['2021-2023']
  },
  {
    title: 'Geospatial modeling of the effects of traffic noise exposure along selected road corridors in Kumasi',
    details: ['2021-2023']
  }
]

const grants: Event[] = [
  {
    title: 'KNUST-LISA Training in Statistical Data Analysis and Data Visualization workshop',
    description: 'For fifth and sixth year Optometry and Visual Science students, KNUST',
    details: ['20-24 January 2020']
  },
  {
    title: 'KNUST travel grant',
    description: 'To attend the 64th International Statistical Institute World Statistics Congress',
    details: ['GHC 10,000', 'Ottawa, Canada', '15th to 20th July, 2023']
  },
  {
    title: 'International Biometric Society Travel grant',
    description: 'To attend 31st International Biometric Conference',
    details: ['USD 1,900', 'Riga, Latvia', '10th -15th July 2022']
  },
  {
    title: 'LISA 2020 grant',
    description: 'To host the Global LISA Sustainability Symposium at KNUST, Kumasi',
    details: ['USD 35,000', '2022']
  },
  {
    title: 'Technical University of Munich, KNUST, and Moi University VolkswagenStifung Research Grant',
    description: 'For postgraduate training in Biostatistics',
    details: ['€86,000', '2022']
  }
]

const projects: Event[] = [
  {
    title: 'Hosting the Global LISA 2020 Symposium',
    details: ['May 2022']
  },
  {
    title: 'Summer School on Application of Biomathematics and Biostatistics on Genomics and Epidemiology',
    description: 'Co-PI and resource person',
    details: ['Eldoret, Kenya', '12th to 24th March 2023', 'Funded by Volkswagen Foundation (€86,000)']
  },
  {
    title: 'Global LISA 2020 Sustainability Symposium',
    description: 'Organizer',
    details: ['KNUST', '01 to 05 May 2022', 'LISA 2020 grant (USD 35,000)']
  },
  {
    title: 'Technical University of Munich Global Incentive Fund 2021',
    description: 'Co-PI for faculty Exchange',
    details: ['€10,000', 'In collaboration with Prof Aurelien Tellier and Prof Olivier Pamen']
  },
  {
    title: 'KNUST-LISA Regional Symposium and World Statistics Day',
    details: ['International Statistical Institute (ISI) USD 8,300 grant', 'October 2020']
  }
]