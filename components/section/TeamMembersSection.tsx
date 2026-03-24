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
      delay: i * 0.08,
      duration: 0.45,
      ease: 'easeOut' as const,
    },
  }),
}

const MemberCard = ({ name, branch, year, image, linkedin, github, index }: any) => {


  return (
    <motion.div
      className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.34rem)] xl:w-[calc(25%-1.5rem)]"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      custom={index}
    >
      <div className="absolute top-0 left-0 w-full h-1 bg-[#FFC72C] transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 z-10"></div>
      
      <div className="aspect-square relative overflow-hidden bg-gray-100">
        {image ? (
          <img 
            src={image} 
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200">
            <span className="text-4xl font-bold text-[#0A2A4A] transition-transform duration-500 group-hover:scale-110">{name.charAt(0)}</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A2A4A]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#0A2A4A] mb-2">{name}</h3>
        
        {(branch || year) && (
          <div className="flex flex-wrap items-center gap-2">
            {branch && (
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#00629B]/10 text-[#00629B]">
                {branch}
              </span>
            )}
            {year && (
              <span className="inline-block px-3 py-1 text-xs font-semibold tracking-wide uppercase rounded-full bg-[#FFC72C]/20 text-[#0A2A4A]">
                {year}
              </span>
            )}
          </div>
        )}
        
        <div className="mt-4 pt-4 border-t border-gray-100 flex gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 relative z-10">
          <a href={linkedin || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#00629B] transition-colors" aria-label="LinkedIn Profile">
            <Linkedin size={22} />
          </a>
          <a href={github || '#'} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#0A2A4A] transition-colors" aria-label="GitHub Profile">
            <Github size={22} />
          </a>
        </div>
      </div>
    </motion.div>
  )
}

export const TeamMembersSection = () => {
  const divisions = [
    {
      name: "Technical Development Division",
      members: [
        { name: 'Amit Vishwakarma', branch: 'IoT', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Amit Manmode', branch: 'CSE', year: 'II Year', image: null, linkedin: 'https://www.linkedin.com/in/amit-manmode-5b1a23328/', github: '#' },
        { name: 'Aditya Singh', branch: 'AIDS', year: 'II Year', image: "/images-office-bearers/aditya-singh.jpg", linkedin: 'https://www.linkedin.com/in/adityaahere/', github: '#' },
        { name: 'Muhammad Raihaan Musharraf', branch: 'AI', year: 'II Year', image: null, linkedin: 'https://www.linkedin.com/in/raihaaniyat/', github: '#' },
        { name: 'Astha Jain', branch: 'CSBS', year: 'I Year', image: null, linkedin: '#', github: '#' }
      ]
    },
    {
      name: "Operations & Management Cell",
      members: [
        { name: 'Radhika Nayak', branch: 'IT', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Animesh Singh', branch: 'AIDS', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Bhanuj Hinge', branch: 'ETE', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Khushboo Chourasiya', branch: 'CSD', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Bhavya Tiwari', branch: 'IoT', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Yash Panse', branch: 'CSD', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Unnati Sharma', branch: 'CSBS', year: 'I Year', image: null, linkedin: '#', github: '#' }
      ]
    },
    {
      name: "Public Relations & Outreach",
      members: [
        { name: 'Anmol Soni', branch: 'AIDS', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Aman Sharma', branch: 'IoT', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Shivansh Soni', branch: 'CSE', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Lavi Barya', branch: 'CSD', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Shivam Sharma', branch: 'ECE', year: 'I Year', image: null, linkedin: '#', github: '#' }
      ]
    },
    {
      name: "Content & Copywriting Division",
      members: [
        { name: 'Janya Agrawal', branch: 'ECE', year: 'III Year', image: null, linkedin: '#', github: '#' },
        { name: 'Yashasvi Tomar', branch: 'ECE', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Anushka Dhakad', branch: 'CE', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Snehal Bhardwaj', branch: 'ECE', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Piyush Moonat', branch: 'CSE', year: 'I Year', image: null, linkedin: '#', github: '#' }
      ]
    },
    {
      name: "Creative Design Division",
      members: [
        { name: 'Dhruv Keshari', branch: 'CSD', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Chahat Bhatija', branch: 'AIR', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Vaidik Patidar', branch: 'CSE', year: 'II Year', image: null, linkedin: '#', github: '#' },
        { name: 'Aahana Sengar', branch: 'IoT', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Gauri Gupta', branch: 'ECE', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Disha Prajapati', branch: 'AIDS', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Krishna Shrivastava', branch: 'ECE', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Aditya Mishra', branch: 'ECE', year: 'I Year', image: null, linkedin: '#', github: '#' },
        { name: 'Prabal Jaiswal', branch: 'CSD', year: 'I Year', image: null, linkedin: '#', github: '#' }
      ]
    }
  ]

  return (
    <section id="divisions" className="py-20 bg-[#F5F7FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Core Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A2A4A] mb-4">
            Our Divisions
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#00629B] to-[#FFC72C] mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto text-lg">
            Meet the talented individuals driving innovation and excellence across our core divisions.
          </p>
        </motion.div>

        {/* Mapped Divisions */}
        <div className="space-y-24">
          {divisions.map((division, index) => (
            <div key={index} className="border-t border-gray-200 pt-16 first:border-0 first:pt-0">
              {/* Division Title Block */}
              <motion.div
                className="mb-12 text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-3xl font-bold text-[#0A2A4A] mb-1">{division.name}</h3>
                <span className="text-sm font-medium text-gray-400 tracking-wide">{division.members.length} members</span>
                <div className="w-16 h-1 bg-[#FFC72C] mx-auto rounded-full mt-3"></div>
              </motion.div>
              
              {/* Members Flex — centered last row */}
              <div className="flex flex-wrap justify-center gap-8">
                {division.members.map((member, mIndex) => (
                  <MemberCard key={mIndex} {...member} index={mIndex} />
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}