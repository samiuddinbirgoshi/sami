"use client";

import { useEffect, useState } from "react";

export default function AboutSection() {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return null;

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Prime Windsor Multifamily Investment
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Discover Joinville Suites, two prime multifamily properties located at 3905
              Riverside Drive East and 3900 Wyandotte Street East in vibrant Windsor, Ontario.
              Offering a total of 126 well-maintained units (72 at Riverside and 54 at Wyandotte),
              Joinville Suites provides a secure and long-term living experience. Benefit from stable
              and predictable cash flows in a growing market with high tenant demand, ensuring a
              steady stream of rental income and significant potential for value appreciation.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/a.jpg"
                alt="Joinville Suites Building"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/f.jpg"
                alt="Interior Design"
                className="w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
