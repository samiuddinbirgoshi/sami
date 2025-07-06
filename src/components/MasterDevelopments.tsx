"use client";

import { useState } from "react";

export default function MasterDevelopments() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const developments = [
    {
      id: 1,
      name: "City Walk",
      projects: "4 Projects",
      bedrooms: "1-5 BR",
      price: "From AED 2.73M",
      image: "/city-walk.jpg"
    },
    {
      id: 2,
      name: "The Acres",
      projects: "1 Project",
      bedrooms: "3-5 BR",
      price: "From AED 5.09M",
      image: "/the-acres.jpg"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % developments.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + developments.length) % developments.length);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-3">
            Discover Our Communities
          </p>
          <h2 className="text-4xl font-light text-gray-900">
            Master Developments
          </h2>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {developments.map((dev) => (
              <div key={dev.id} className="group">
                {/* Increased image container size */}
                <div className="relative h-96 overflow-hidden rounded-lg">
                  <img
                    src={dev.image}
                    alt={dev.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-2xl text-white font-medium mb-2">{dev.name}</h3>
                    <p className="text-white/90">{dev.price}</p>
                  </div>
                </div>

                {/* Increased content area */}
                <div className="mt-6 px-4">
                  <div className="flex flex-wrap gap-6 mb-4 text-gray-600">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                      </svg>
                      <span>{dev.projects}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-2 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                      </svg>
                      <span>{dev.bedrooms}</span>
                    </div>
                  </div>

                  <a 
                    href={`/developments/${dev.id}`}
                    className="inline-block text-gray-900 border-b border-gray-900 pb-1 text-sm hover:opacity-80 transition-opacity"
                  >
                    Explore Community →
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation - Only show if more than 2 developments */}
          {developments.length > 2 && (
            <div className="flex justify-center mt-12 space-x-6">
              <button
                onClick={prevSlide}
                className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                disabled={currentIndex === 0}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <div className="flex items-center space-x-2">
                {developments.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentIndex ? "bg-gray-900" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>
              <button
                onClick={nextSlide}
                className="p-2 text-gray-400 hover:text-gray-900 transition-colors"
                disabled={currentIndex >= developments.length - 1}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}