"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X, Menu } from "lucide-react";
import Amenities from "@/components/Amenities";
import Interior from "@/components/Interior";
import Footer from "@/components/Footer";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const lastScrollY = useRef(0);
  const mobileMenuOpenRef = useRef(false);

  const slides = [
    {
      image: "/d.jpg",
      title: " Amenities", // Proper space between words
      // subtitle: "Waterfront Living in Windsor",
    },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Amenities", href: "/amenties" },
    { name: "Floor Plans & Price", href: "/floorplans" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
  ];

useEffect(() => {
  setIsVisible(true);
  mobileMenuOpenRef.current = mobileMenuOpen;

  const interval = setInterval(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, 5000);

  const handleScroll = () => {
    if (mobileMenuOpenRef.current) return;
    
    const currentScrollY = window.scrollY;
    
    if (currentScrollY < lastScrollY.current && currentScrollY > 10) {
      setShowHeader(true);
    } 
    else if (currentScrollY > lastScrollY.current && currentScrollY > 50) {
      setShowHeader(false);
    }

    lastScrollY.current = currentScrollY;
    setIsScrolled(currentScrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  
  return () => {
    clearInterval(interval);
    window.removeEventListener("scroll", handleScroll);
  };
}, [slides.length, mobileMenuOpen]); // Add mobileMenuOpen here
  return (
    <>
    <section id="home" className="relative h-screen w-full overflow-hidden">
      {/* Background slides */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={`slide-${index}`}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/70" />
          </div>
        ))}
      </div>


<header
  className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 transform ${
    showHeader ? "translate-y-0" : "-translate-y-full"
  } ${
    isScrolled 
      ? "md:bg-black bg-black shadow-lg py-5" 
      : "bg-transparent pt-4 pb-2" // Added top padding here
  }`}
>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            {/* Clean logo without bold */}
         <Link href="/">
  <span className={`${isScrolled ? "text-xl font-medium  md:text-xl" : "text-xl md:text-xl"} tracking-tight text-white`}>
    JOINVILLE <span className="font-medium">SUITES</span>
  </span>
</Link>

            {/* Desktop Navigation */}
            <nav
              className={`hidden md:flex items-center space-x-8 transition-all text-white`}
            >
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="relative font-medium text-[15.5px] group cursor-pointer">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="flex items-center">
              <button
                className="text-white transition-all duration-300 md:hidden"
                onClick={() => setMobileMenuOpen(true)}
              >
                <Menu className="h-7 w-7" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black/50 transition-opacity duration-500 md:hidden ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className={`fixed inset-0 bg-black transform transition-transform duration-500 ease-in-out ${
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-6 h-full flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <span className="text-xl font-normal text-white">
                JOINVILLE SUITES
              </span>
              <button
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col space-y-4 flex-grow">
              {navItems.map((item) => (
                <Link 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-lg text-white hover:text-gray-300 transition-colors py-2"
                >
                  {item.name}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>

      {/* Hero Content - FIXED TITLE SPACING */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 pt-16">
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-tight tracking-tight">
            {/* Fixed spacing by rendering the whole title as one animated element */}
            <span
              className={`inline-block transform transition-all duration-700 delay-200 ease-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
            >
              {slides[currentSlide].title}
            </span>
          </h1>
          <p
            className={`text-xl md:text-2xl text-white/90 mb-8 max-w-2xl transform transition-all duration-1000 delay-1000 ${
              isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
          >
            {/* {slides[currentSlide].subtitle} */}
          </p>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 right-6 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={`indicator-${index}`}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3  transition-all duration-300  ${
              index === currentSlide ? " scale-125" : "bg-transparent"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
     <Amenities/>
         {/* <CityWalkVision/>  */}
       {/* <FloorPlans/>  */}
       {/* <Interior/>  */}
       {/* <LocationSection />  */}
       {/* <Masterplan/>  */}
       {/* <OtherProjects/>  */}
       {/* <MasterDevelopments/>  */}
     <Footer/>
  </>
  );
}
   
    
