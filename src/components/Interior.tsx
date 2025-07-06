"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Interior() {
  const [selectedBedroom, setSelectedBedroom] = useState("1 Bedroom");
  const [isPlaying, setIsPlaying] = useState(false);

  const bedroomViews = {
    "1 Bedroom": {
      image: "https://ext.same-assets.com/1166745218/1427264092.jpeg",
      video: "https://example.com/1-bedroom-360-video.mp4"
    },
    "2 Bedroom": {
      image: "https://ext.same-assets.com/1166745218/2-bedroom-interior.jpg",
      video: "https://example.com/2-bedroom-360-video.mp4"
    },
    "3 Bedroom": {
      image: "https://ext.same-assets.com/1166745218/3-bedroom-interior.jpg",
      video: "https://example.com/3-bedroom-360-video.mp4"
    }
  };

  const bedrooms = Object.keys(bedroomViews);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            INTERIOR
          </p>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 md:mb-0">
              Experience an Interactive 360° View
            </h2>

            {/* Bedroom Selector - Desktop */}
            <div className="relative hidden md:block">
              <select
                value={selectedBedroom}
                onChange={(e) => {
                  setSelectedBedroom(e.target.value);
                  setIsPlaying(false);
                }}
                className="appearance-none bg-white border border-gray-300 rounded-full px-6 py-3 pr-10 text-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              >
                {bedrooms.map((bedroom) => (
                  <option key={bedroom} value={bedroom}>
                    {bedroom}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none">
                <svg
                  className="h-5 w-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Bedroom Selector - Mobile - Now vertical */}
          <div className="md:hidden mt-6 grid grid-cols-1 gap-2 w-full">
            {bedrooms.map((bedroom) => (
              <button
                key={bedroom}
                onClick={() => {
                  setSelectedBedroom(bedroom);
                  setIsPlaying(false);
                }}
                className={`w-full px-6 py-3 rounded-full text-left transition-colors ${
                  selectedBedroom === bedroom
                    ? "bg-black text-white"
                    : "bg-white text-gray-900 border border-gray-300"
                }`}
              >
                {bedroom}
              </button>
            ))}
          </div>
        </div>

        {/* 360° View Container */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="relative h-96 md:h-[500px]">
            {isPlaying ? (
              <div className="w-full h-full flex items-center justify-center">
                <iframe 
                  // src={bedroomViews[selectedBedroom].video}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; fullscreen; gyroscope; vr"
                  allowFullScreen
                ></iframe>
              </div>
            ) : (
              <>
                <img
                  // src={bedroomViews[selectedBedroom].image}
                  alt={`${selectedBedroom} Interior View`}
                  className="w-full h-full object-cover"
                />

                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button 
                    className="bg-white/90 backdrop-blur-sm rounded-full p-4 hover:bg-white transition-all transform hover:scale-105"
                    onClick={() => setIsPlaying(true)}
                  >
                    <svg
                      className="h-8 w-8 text-gray-900 ml-1"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l3-2z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {/* 360° Indicator */}
                <div className="absolute top-4 left-4">
                  <div className="bg-black/80 text-white px-3 py-1 rounded-full text-sm font-medium">
                    360°
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8">
          <p className="text-xs text-gray-500 leading-relaxed">
            *Disclaimer: The interior and exterior finishings displayed in this footage are for illustration purposes only. The actual floor plans may vary significantly from what is shown herein. All furnishings used in the model
            are for design displays on the website for visual representation of the proposed floor plan.
          </p>
        </div>
      </div>
    </section>
  );
}