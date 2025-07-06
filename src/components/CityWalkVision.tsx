import { Button } from "@/components/ui/button";

export default function CityWalkVision() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
              PART OF A BIGGER VISION
            </p>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
              City Walk
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Tucked amongst emerald landscapes and dappled walkways rises City Walk, one of the most prestigious residential neighbourhoods in Dubai. Majestic and serene, this is a place to live life magnificently.
            </p>
            <Button
              variant="outline"
              size="lg"
              className="border-gray-300 text-gray-900 hover:bg-gray-50 px-6 py-3"
            >
              View Development
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://ext.same-assets.com/1166745218/1823883301.jpeg"
                alt="City Walk Development"
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
