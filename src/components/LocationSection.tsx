// src/components/LocationSection.tsx
export default function LocationSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              Discover Windsor: Your Waterfront Oasis
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Joinville Suites offers an excellent standard of living, combining the perks of 
              waterfront living with city conveniences in Windsor, Ontario. As a vibrant and 
              expanding city, Windsor boasts a dynamic downtown with luxury hotels, diverse 
              restaurants, outdoor art installations, and scenic park trails along the Detroit 
              River. This diverse environment attracts families, couples, young adults, and 
              retirees, offering a wide range of employment opportunities across major industries 
              and a booming housing market.
            </p>
          </div>

          {/* Right Image - Map */}
          <div className="relative h-96 bg-gray-100 rounded-lg overflow-hidden shadow-lg">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.225082410843!2d-83.02382292425996!3d42.12310297120075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d4c3f1e1e3d%3A0x8d1d3b3d3d3d3d3d!2sJoinville%20Suites!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}