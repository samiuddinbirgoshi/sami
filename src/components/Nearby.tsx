import React from 'react';

interface ProximityStat {
  number: string;
  description: string;
}

const Nearby: React.FC = () => {
  const proximityStats: ProximityStat[] = [
    {
      number: "5",
      description: "Minutes to Downtown Windsor"
    },
    {
      number: "4",
      description: "Minutes to Windsor Station (VIA Rail)"
    },
    {
      number: "8",
      description: "Minutes to Windsor Yacht Club"
    },
    {
      number: "12",
      description: "Minutes to Little River Golf Course"
    }
  ];

  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2959.225082410843!2d-83.02382292425996!3d42.12310297120075!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883b2d4c3f1e1e3d%3A0x8d1d3b3d3d3d3d3d!2sJoinville%20Suites!5e0!3m2!1sen!2sca!4v1620000000000!5m2!1sen!2sca";

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
            NEARBY ATTRACTIONS
          </p>
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-8">
            Prime Windsor Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Joinville Suites offers convenient access to Windsor's best amenities and attractions
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full lg:w-1/2 h-96 rounded-lg overflow-hidden shadow-lg order-1 lg:order-1 relative">
            <iframe 
              src={`${mapUrl}&maptype=satellite`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              aria-label="Satellite view of Joinville Suites location"
            />
            
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="animate-pulse">
                <div className="w-6 h-6 text-[#b60b49] rounded-full shadow-xl" />
                <div className="w-6 h-6 text-[#b60b49] rounded-full absolute top-0 left-0 opacity-40 animate-ping" />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 order-2 lg:order-2">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {proximityStats.map((stat, index) => (
                <div key={`stat-${index}`} className="p-2 md:p-4">
              <div 
  className="text-4xl md:text-5xl lg:text-6xl font-light mb-2 text-center md:text-left text-[#b60b49]"
>
  {stat.number}
</div>
                  <p className="text-sm md:text-base text-gray-600 leading-relaxed text-center md:text-left">
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nearby;