"use client";

import { useState } from "react";
import Image from "next/image";

const amenities = [
  {
    title: "Modernized Common Areas",
    description: "Enjoy updated hallways, lobbies, and a welcoming rental office with contemporary design.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    image: "/amenities/common-areas.jpg",
    category: "building"
  },
  {
    title: "Secure Living",
    description: "24/7 monitored security systems with controlled access and CCTV surveillance.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    image: "/amenities/security.jpg",
    category: "safety"
  },
  {
    title: "Efficient Elevators",
    description: "Modern elevator systems with regular maintenance for quick and reliable access.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
      </svg>
    ),
    image: "/amenities/elevators.jpg",
    category: "building"
  },
  {
    title: "Updated Building Systems",
    description: "Energy-efficient HVAC and modern plumbing systems for year-round comfort.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    image: "/amenities/hvac.jpg",
    category: "building"
  },
  {
    title: "On-site Parking",
    description: "Secure underground and surface parking options with EV charging stations available.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
      </svg>
    ),
    image: "/amenities/parking.jpg",
    category: "parking"
  },
  {
    title: "Community & Entertainment",
    description: "Minutes from Windsor Yacht Club, Caesars Windsor Casino, and the Colosseum theatre.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    image: "/amenities/entertainment.jpg",
    category: "location"
  },
  {
    title: "Fitness Center",
    description: "State-of-the-art gym equipment available 24/7 for resident use.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    image: "/amenities/gym.jpg",
    category: "wellness"
  },
  {
    title: "Laundry Facilities",
    description: "On-site laundry rooms with modern washers and dryers for resident convenience.",
    icon: (
      <svg className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    image: "/amenities/laundry.jpg",
    category: "convenience"
  }
];

const categories = [
  { id: "all", name: "All Amenities" },
  { id: "building", name: "Building Features" },
  { id: "safety", name: "Safety & Security" },
  { id: "wellness", name: "Health & Wellness" },
  { id: "convenience", name: "Convenience" },
  { id: "location", name: "Location Benefits" }
];

export default function AmenitiesPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedAmenity, setSelectedAmenity] = useState<number | null>(null);

  const filteredAmenities = activeCategory === "all" 
    ? amenities 
    : amenities.filter(amenity => amenity.category === activeCategory);

  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Premium Amenities & Facilities
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience elevated living with our exceptional building features and community benefits
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Amenities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAmenities.map((amenity, index) => (
            <div 
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all duration-300 bg-white"
              onClick={() => setSelectedAmenity(index)}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={amenity.image}
                  alt={amenity.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <div className="text-blue-500 mb-3">
                  {amenity.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{amenity.title}</h3>
                <p className="text-gray-600">{amenity.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Amenity Modal */}
        {selectedAmenity !== null && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 w-full bg-gray-200">
                <Image
                  src={amenities[selectedAmenity].image}
                  alt={amenities[selectedAmenity].title}
                  fill
                  className="object-cover"
                />
                <button 
                  onClick={() => setSelectedAmenity(null)}
                  className="absolute top-4 right-4 bg-white/80 hover:bg-white rounded-full p-2"
                >
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="flex items-start">
                  <div className="text-blue-500 mr-4">
                    {amenities[selectedAmenity].icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {amenities[selectedAmenity].title}
                    </h3>
                    <p className="text-gray-600 text-lg mb-6">
                      {amenities[selectedAmenity].description}
                    </p>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <h4 className="font-medium text-blue-800 mb-2">Additional Details</h4>
                      <ul className="space-y-2 text-blue-700">
                        <li className="flex items-start">
                          <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Available to all residents</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Regularly maintained and updated</span>
                        </li>
                        <li className="flex items-start">
                          <svg className="h-5 w-5 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>Accessible according to building policies</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}