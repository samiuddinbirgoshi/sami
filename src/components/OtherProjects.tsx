"use client";

import { useState } from "react";

export default function OtherProjects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      id: 1,
      name: "Crestlane",
      location: "City Walk, Dubai",
      bedrooms: "1-4 BR | Penthouse",
      price: "AED 2.62M",
      image: "/a.jpg"
    },
    {
      id: 2,
      name: "Emirates Towers Residences",
      location: "Trade Centre, Dubai",
      bedrooms: "1-4 BR",
      price: "AED 3.5M",
      image: "/b.jpg"
    },
    {
      id: 3,
      name: "Central Park",
      location: "City Walk, Dubai",
      bedrooms: "1-3 BR",
      price: "AED 2.1M",
      image: "/c.jpg"
    },
    {
      id: 4,
      name: "Verve",
      location: "City Walk, Dubai",
      bedrooms: "1-3 BR",
      price: "AED 1.8M",
      image: "/d.jpg"
    },
    {
      id: 5,
      name: "Northline",
      location: "City Walk, Dubai",
      bedrooms: "1-4 BR",
      price: "AED 2.9M",
      image: "/e.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % (projects.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length - 2) % (projects.length - 2));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between mb-10">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-light text-gray-900 mb-1">Our Featured Properties</h2>
            <p className="text-gray-600 text-sm">Exclusive residential opportunities in Dubai's finest locations</p>
          </div>
          <a 
            href="/properties" 
            className="text-sm text-gray-900 border-b border-transparent hover:border-gray-900 transition-colors"
          >
            View all properties →
          </a>
        </div>

        {/* Projects Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.slice(currentIndex, currentIndex + 3).map((project) => (
              <div key={project.id} className="group">
                <div className="relative h-80 mb-4 overflow-hidden"> {/* Increased image height */}
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
                    <span className="text-white text-sm font-light">{project.price}</span>
                  </div>
                </div>

                <div className="px-2">
                  <h3 className="text-lg font-normal text-gray-900 mb-1">{project.name}</h3>
                  <p className="text-gray-600 text-sm mb-3">{project.location}</p>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-500 text-xs">{project.bedrooms}</p>
                    <a 
                      href={`/properties/${project.id}`}
                      className="text-xs text-gray-900 border-b border-transparent hover:border-gray-900 transition-colors"
                    >
                      Learn More →
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center mt-10 space-x-6">
            <button
              onClick={prevSlide}
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              disabled={currentIndex === 0}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <div className="flex items-center space-x-2">
              {Array.from({ length: projects.length - 2 }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={nextSlide}
              className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
              disabled={currentIndex >= projects.length - 3}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}