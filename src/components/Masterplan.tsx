"use client";

import { Button } from "@/components/ui/button";

export default function Masterplan() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            MASTERPLAN
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Explore the Blueprint of the Project
          </h2>
        </div>

        {/* Interactive Map Container */}
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden mb-8">
          <div className="relative h-96 md:h-[500px]">
            <img
              src="d.jpg"
              alt="City Walk Northline Masterplan"
              className="w-full h-full object-cover"
            />

            {/* Interactive overlay elements */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* <div className="text-center">
                <Button
                  variant="outline"
                  className="bg-white/90 backdrop-blur-sm border-gray-300 text-gray-900 hover:bg-white px-8 py-3"
                >
                  Switch to 3D
                </Button>
              </div> */}
            </div>
          </div>
        </div>

        {/* Download Button */}
        {/* <div className="text-center">
          <Button size="lg" className="bg-black text-white hover:bg-gray-800 px-8 py-3">
            Download Masterplan
          </Button>
        </div> */}

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 max-w-4xl mx-auto leading-relaxed">
            *Disclaimer: The views of art work, facilities, and layout/floor plans described are only indicative purposes only. The actual floor plans may vary in construction to the artistic impressions.Plans
            are subject to change. All land being developed is subject to authority approvals, which may require amendments to the layout's location or orientation. Terms & conditions apply.
          </p>
        </div>
      </div>
    </section>
  );
}
