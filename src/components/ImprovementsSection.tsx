// src/components/ImprovementsSection.tsx
import React from 'react';

export default function ImprovementsSection() {
  return (
    <section className="relative py-18 bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden">
      {/* Decorative elements - updated to purple */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-red-100 opacity-20 blur-3xl"></div>
      
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        {/* Section header - updated to purple */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center mb-6">
            <div className="w-16 h-0.5 bg-red-400"></div>
            <div className="mx-4 text-red-700 font-light uppercase tracking-widest text-sm">Premium Living</div>
            <div className="w-16 h-0.5 bg-red-300"></div>
          </div>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
            <span className="block">Sophisticated</span>
            <span className="font-normal text-black">Enhancements & Location</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience luxury living with premium upgrades in Windsor's most desirable location
          </p>
        </div>

        {/* Content grid with increased spacing */}
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Building Enhancements */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all hover:-translate-y-2">
            <div className="p-10">
              <div className="flex items-center mb-10">
                <h3 className="text-2xl font-light text-gray-900">Premium Building Enhancements</h3>
              </div>
              
              <ul className="space-y-6">
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">$7.5 Million+ in Upgrades</p>
                    <p className="text-gray-600 mt-1">Comprehensive renovations since 2010</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Luxury In-Suite Finishes</p>
                    <p className="text-gray-600 mt-1">Premium flooring, designer kitchens & spa-like bathrooms</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Elevated Common Areas</p>
                    <p className="text-gray-600 mt-1">Redesigned lobby, hallways, and rental office</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Structural Excellence</p>
                    <p className="text-gray-600 mt-1">Reinforced balconies, premium windows, and roofing</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Modern Systems</p>
                    <p className="text-gray-600 mt-1">State-of-the-art elevators, HVAC, and plumbing</p>
                  </div>
                </li>
              </ul>
            </div>
            {/* Updated to purple gradient */}
          <div className="bg-black p-6 text-center">
  <p className="text-white font-light">Excellence in every detail</p>
</div>
          </div>

          {/* Geographic Proximity */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transform transition-all hover:-translate-y-2">
            <div className="p-10">
              <div className="flex items-center mb-10">
                <h3 className="text-2xl font-light text-gray-900">Prime Windsor Location</h3>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Downtown & Entertainment</p>
                    <p className="text-gray-600 mt-1">5 minutes to downtown Windsor and Caesars Windsor</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Transportation Hub</p>
                    <p className="text-gray-600 mt-1">4 minutes to Windsor Station (VIA Rail)</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Waterfront Access</p>
                    <p className="text-gray-600 mt-1">8 minutes to Windsor Yacht Club</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Sports & Recreation</p>
                    <p className="text-gray-600 mt-1">11 minutes to WFCU Centre, 12 minutes to Little River Golf</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-red-50 rounded-full p-2 mr-4">
                    <svg className="h-5 w-5 text-red-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-900 font-medium">Academic Excellence</p>
                    <p className="text-gray-600 mt-1">Walking distance to University of Windsor</p>
                  </div>
                </div>
              </div>
            </div>
            {/* Updated to purple gradient */}
           <div className="bg-black p-6 text-center">
  <p className="text-white font-light">Everything you need is minutes away</p>
</div>
          </div>
        </div>
      </div>
    </section>
  );
}