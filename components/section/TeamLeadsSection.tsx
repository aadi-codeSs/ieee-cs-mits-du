'use client'

import React from 'react'
import { motion } from 'framer-motion'

const Linkedin = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const Github = ({ size = 20 }: { size?: number }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.24c3-.34 6-1.53 6-6.76a5.2 5.2 0 0 0-1.5-3.78c.15-.38.65-1.8-.15-3.73 0 0-1.25-.4-4.1 1.5a14.2 14.2 0 0 0-7.5 0c-2.85-1.9-4.1-1.5-4.1-1.5-.8 1.93-.3 3.35-.15 3.73A5.2 5.2 0 0 0 3 8.24c0 5.22 3 6.42 6 6.76-.7.63-1 1.5-1 2.3V22"></path>
    <path d="M9 20c-4 1-5-2-7-2"></path>
  </svg>
);

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: 'easeOut' as const,
    },
  }),
}

const LeadCard = ({ name, role, image, linkedin, github, index }: any) => {


  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(25%-1.5rem)]"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#00629B] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"></div>
      
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        {image ? (
          <img 
            src={image} 
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-[#0A2A4A] to-[#00629B]">
            <span className="text-4xl font-bold text-white transition-transform duration-500 group-hover:scale-110">{name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A4A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A2A4A] mb-1">{name}</h3>
        <p className="text-[#00629B] font-medium">{role}</p>
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
          <a href={linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00629B] transition-colors" aria-label="LinkedIn Profile">
            <Linkedin size={22} />
          </a>
          <a href={github || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00629B] transition-colors" aria-label="Github Profile">
            <Github size={22} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export const TeamLeadsSection = () => {
  const leads = [
    {
      name: 'Ayan Ahmed Khan',
      role: 'Chairperson',
      image: "/images-office-bearers/ayan.jpg",
      linkedin: 'https://www.linkedin.com/in/ayan-ahmed-khan-95978620a/',
      github: '#'
    },
    {
      name: 'Gagandeep Kushwah',
      role: 'Vice Chairperson',
      image: "/images-office-bearers/gagandeep.png",
      linkedin: 'https://www.linkedin.com/in/gagandeepkushwah730221b/',
      github: '#'
    },
    {
      name: 'Divita Joshi',
      role: 'Secretary',
      image: "/images-office-bearers/divita-joshi.png",
      linkedin: 'https://www.linkedin.com/in/divita-joshi-478b72352/',
      github: '#'
    },
    {
      name: 'Devanshu Gupta',
      role: 'Treasurer',
      image: "/images-office-bearers/devanshu.jpg",
      linkedin: 'https://www.linkedin.com/in/devanshu-gupta-34344127b/',
      github: '#'
    }
  ]

  return (
    <section id="leads" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A4A] mb-4">
            Our Leadership Team
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00629B] to-[#FFC72C] mx-auto rounded-full"></div>
        </motion.div>

        {/* Leads Flex — centered */}
        <div className="flex flex-wrap justify-center gap-8">
          {leads.map((lead, index) => (
            <LeadCard key={index} {...lead} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
