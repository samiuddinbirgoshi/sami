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
            Welcome to Joinville Suites – A Place to Call Home
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Joinville Suites offers exceptional living across two sought-after locations in vibrant Windsor, Ontario—3905 Riverside Drive East and 3900 Wyandotte Street East. With a total of 126 thoughtfully maintained suites (72 at Riverside and 54 at Wyandotte), residents enjoy comfortable, secure, and welcoming homes in friendly communities. The buildings are known for their peaceful atmosphere, prime locations near the waterfront and amenities, and long-term residents who truly love where they live. Joinville Suites is more than just a place to live—it's a place to feel at home.
            </p>
          </div>

          <div className="space-y-6">
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/k.png"
                alt="Joinville Suites Building"
                className="w-full h-80 object-cover"
              />
            </div>

            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/a.jpg"
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
