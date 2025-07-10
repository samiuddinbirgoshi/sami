export default function UrbanLife() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
            Comfort, Community, and Convenience at Joinville Suites
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
Nestled in two of Windsor’s most desirable neighbourhoods, Joinville Suites blends comfort with convenience for residents who value quality living. Whether you're enjoying scenic views along Riverside Drive or the vibrant energy of Wyandotte Street East, these well-cared-for buildings offer spacious layouts, quiet surroundings, and easy access to shops, parks, and transit. Known for their strong sense of community and attentive management, Joinville Suites is where residents choose to stay for the long term because it simply feels like home.
            </p>
          </div>

          {/* Right Images */}
          <div className="space-y-6">
            {/* Main Building Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="/sa.jpg"
                alt="City Walk Northline Building"
                className="w-full h-80 object-cover"
              />
            </div>

            {/* Interior Image */}
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <img
                src="ud.jpg"
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
