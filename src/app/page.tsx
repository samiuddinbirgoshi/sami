// src/app/page.tsx

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ImageGallery from "@/components/ImageGallery";
import LocationSection from "@/components/LocationSection"; // (not used, consider removing)
import ImprovementsSection from "@/components/ImprovementsSection";
import AmenitiesPage from "@/components/AmenitiesPage"; // (not used, consider removing)
import Amenities from "@/components/Amenities";
import CityWalkVision from "@/components/CityWalkVision"; // (not used, consider removing)
import FloorPlans from "@/components/FloorPlans"; // (not used, consider removing)
import Interior from "@/components/Interior"; // (not used, consider removing)
import Masterplan from "@/components/Masterplan"; // (not used, consider removing)
import Nearby from "@/components/Nearby";
import OtherProjects from "@/components/OtherProjects"; // (not used, consider removing)
import UrbanLife from "@/components/UrbanLife";
import FloorPlansPage from "@/components/FloorPlansPage";

import Footer from "@/components/Footer";
import MasterDevelopments from "@/components/MasterDevelopments"; // (not used, consider removing)
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <AboutSection />
      <ImageGallery />
      <ImprovementsSection />
      <Amenities />
      <UrbanLife />
      <Nearby />
      <ContactForm />
      <FloorPlansPage />
      <Footer />
    </main>
  );
}
