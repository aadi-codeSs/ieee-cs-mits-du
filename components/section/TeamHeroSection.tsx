import React from 'react'
import { ArrowRight, Code, Cpu, Network } from 'lucide-react'

export const TeamHeroSection = () => {
  return (
    <section id="home" className="pt-16 bg-gradient-to-br from-white via-[#F5F7FA] to-blue-50 min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <div className="inline-block">
              <span className="bg-[#FFC72C]/20 text-[#0A2A4A] px-4 py-2 rounded-full text-sm font-semibold">
                Student Chapter
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0A2A4A] leading-tight">
              IEEE Computer Society
              <span className="block text-[#00629B] mt-2">Student Chapter</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Empowering innovation, technology, and leadership among future engineers.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#leads"
                className="group bg-[#0A2A4A] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#00629B] transition-all duration-300 flex items-center gap-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Explore Our Team
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </a>
              <a
                href="#contact"
                className="bg-white text-[#0A2A4A] px-8 py-3 rounded-lg font-semibold border-2 border-[#0A2A4A] hover:bg-[#0A2A4A] hover:text-white transition-all duration-300 shadow-md"
              >
                Join Us
              </a>
            </div>
          </div>

          {/* Right Illustration */}
          <div className="relative">
            <div className="relative z-10">
              {/* Floating Icons */}
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <Code className="text-[#00629B] mb-4" size={48} />
                  <h3 className="font-semibold text-[#0A2A4A] mb-2">Development</h3>
                  <p className="text-gray-600 text-sm">Building innovative solutions</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 mt-8">
                  <Cpu className="text-[#FFC72C] mb-4" size={48} />
                  <h3 className="font-semibold text-[#0A2A4A] mb-2">AI & ML</h3>
                  <p className="text-gray-600 text-sm">Exploring intelligence</p>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 -mt-4">
                  <Network className="text-[#00629B] mb-4" size={48} />
                  <h3 className="font-semibold text-[#0A2A4A] mb-2">Networking</h3>
                  <p className="text-gray-600 text-sm">Connecting systems</p>
                </div>
                <div className="bg-gradient-to-br from-[#0A2A4A] to-[#00629B] p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 mt-4">
                  <div className="text-white">
                    <h3 className="font-bold text-3xl mb-2 text-[#FFC72C]">500+</h3>
                    <p className="text-blue-100">Active Members</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Background Gradient Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-[#00629B]/20 to-[#FFC72C]/20 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
