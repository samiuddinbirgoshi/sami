"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export default function FloorPlans() {
  const [activeView, setActiveView] = useState("2D");
  const [activeUnit, setActiveUnit] = useState("1 Bedroom");

  const units = [
    { 
      name: "1 Bedroom", 
      image2D: "e.jpg",
      // Replace with actual 3D image
      area: "584 SQFT (934.42 SQFT)"
    },
    { 
      name: "2 Bedroom", 
      image2D: "f.jpg", // Replace with actual image
     // Replace with actual 3D image
      area: "874 SQFT (1,399.42 SQFT)"
    },
    { 
      name: "3 Bedroom", 
      image2D: "g.jpg", // Replace with actual image
     // Replace with actual 3D image
      area: "1,184 SQFT (1,894.42 SQFT)"
    }
  ];

  // Get current unit based on active selection
  const currentUnit = units.find(unit => unit.name === activeUnit) || units[0];
  
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            FLOOR PLAN
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Start Planning Your Home Layout
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Side - Unit Selection */}
          <div>
            {/* 2D/3D Toggle */}
            <div className="flex mb-8">
              <div className="bg-gray-100 rounded-full p-1 flex">
                {["2D"].map((view) => (
                  <button
                    key={view}
                    onClick={() => setActiveView(view)}
                    className={`px-6 py-2  text-sm font-medium transition-all ${
                      activeView === view
                        ? "bg-black text-white"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {view}
                  </button>
                ))}
              </div>
            </div>

            {/* Unit Type Buttons */}
            <div className="space-y-3">
              {units.map((unit) => (
                <button
                  key={unit.name}
                  onClick={() => setActiveUnit(unit.name)}
                  className={`w-full text-left px-6 py-4 rounded-lg border transition-all ${
                    activeUnit === unit.name
                      ? "bg-black text-white border-black"
                      : "bg-white text-gray-900 border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {unit.name}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Floor Plan Display */}
          <div className="relative">
            <div className="bg-gray-50 rounded-sm p-2 min-h-96 flex flex-col items-center justify-center">
              <img
                src={activeView === "2D" ? currentUnit.image2D : currentUnit.image2D}
                alt={`${activeUnit} Floor Plan`}
                className="w-full h-auto max-w-8xl mx-auto"
              />
              <div className="text-center mt-6">
                <p className="text-sm font-medium text-gray-900">
                  TOTAL AREA: {currentUnit.area}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}