"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function FloorPlansPage() {
  const [activeBuilding, setActiveBuilding] = useState("riverside");
  const [activeUnit, setActiveUnit] = useState("1-bedroom");
  const router = useRouter();

  const buildings = {
    riverside: {
      name: "3905 Riverside Drive East",
      description: "6 Storeys, 72 Units",
      units: [
        {
          id: "1-bedroom",
          name: "1 Bedroom",
          size: "Approx. 750 sq ft",
          beds: 1,
          baths: 1,
          features: ["Newly renovated kitchen", "Upgraded bathroom", "Spacious layout", "Some units with balconies"],
          image: "/1a.jpg"
        },
        {
          id: "2-bedroom",
          name: "2 Bedroom",
          size: "Approx. 950 sq ft",
          beds: 2,
          baths: 1,
          features: ["Newly renovated kitchen", "Upgraded bathroom", "Spacious layout", "Some units with balconies"],
          image: "/2a.jpg"
        },
        {
          id: "3-bedroom",
          name: "3 Bedroom",
          size: "Approx. 1200 sq ft",
          beds: 3,
          baths: "1 or 2",
          features: ["Newly renovated kitchen", "Upgraded bathroom(s)", "Spacious layout", "Some units with balconies"],
          image: "/3a.jpg"
        }
      ]
    },
    wyandotte: {
      name: "3900 Wyandotte Street East",
      description: "5 Storeys, 54 Units",
      units: [
        {
          id: "bachelor",
          name: "Bachelor",
          size: "Approx. 500 sq ft",
          beds: "Studio",
          baths: 1,
          features: ["Newly renovated kitchen", "Upgraded bathroom", "Efficient layout"],
          image: "/1a.jpg"
        },
        {
          id: "1-bedroom",
          name: "1 Bedroom",
          size: "Approx. 700 sq ft",
          beds: 1,
          baths: 1,
          features: ["Newly renovated kitchen", "Upgraded bathroom", "Spacious layout"],
          image: "/2a.jpg"
        },
        {
          id: "2-bedroom",
          name: "2 Bedroom",
          size: "Approx. 900 sq ft",
          beds: 2,
          baths: 1,
          features: ["Newly renovated kitchen", "Upgraded bathroom", "Spacious layout"],
          image: "/3a.jpg"
        }
      ]
    }
  };

  const currentBuilding = buildings[activeBuilding as keyof typeof buildings];
  const currentUnit = currentBuilding.units.find(unit => unit.id === activeUnit) || currentBuilding.units[0];

  return (
    <section id="floor-plans" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
            Floor Plans & Pricing
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our thoughtfully designed layouts to find your perfect home
          </p>
        </div>

        {/* Building Selector */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2">
            {Object.keys(buildings).map((buildingKey) => (
              <button
                key={buildingKey}
                onClick={() => {
                  setActiveBuilding(buildingKey);
                  setActiveUnit(buildings[buildingKey as keyof typeof buildings].units[0].id);
                }}
                className={`px-6 py-2 text-sm font-medium transition-all rounded-full ${
                  activeBuilding === buildingKey
                    ? "bg-black text-white"
                    : "text-gray-900 hover:bg-gray-100"
                }`}
              >
                {buildings[buildingKey as keyof typeof buildings].name}
              </button>
            ))}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Unit Selection */}
          <div>
            <h3 className="text-2xl font-light text-gray-900 mb-6">
              {currentBuilding.name} <span className="text-gray-500 text-lg">({currentBuilding.description})</span>
            </h3>
            
            {/* Unit Type Buttons */}
            <div className="space-y-4 mb-8">
              {currentBuilding.units.map((unit) => (
                <button
                  key={unit.id}
                  onClick={() => setActiveUnit(unit.id)}
                  className={`w-full text-left px-6 py-4 rounded-full transition-all ${
                    activeUnit === unit.id
                      ? "bg-black text-white"
                      : "bg-white text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <span className="font-medium">{unit.name}</span>
                    <span className="text-sm text-gray-500">{unit.size}</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Unit Details */}
            <div>
              <h4 className="text-lg font-medium text-gray-900 mb-4">Unit Features</h4>
              <ul className="space-y-2">
                {currentUnit.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="h-5 w-5 text-gray-500 mr-2 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right Side - Floor Plan Display */}
          <div className="relative">
            <div className="p-4">
              <img
                src={currentUnit.image}
                alt={`${currentUnit.name} Floor Plan`}
                className="w-full h-auto border border-gray-200"
              />
              
              <Button 
                className="w-full mt-6 bg-black hover:bg-gray-800 text-white rounded-full py-3"
                onClick={() => router.push('/contact')}
              >
                Inquire About This Unit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}