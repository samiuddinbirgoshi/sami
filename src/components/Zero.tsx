"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  X,
  Menu,
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Linkedin,
} from "lucide-react";

export default function Zero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const slides = [
  
    {
      image: "/i.jpg",
      title: "PLANFLOORS",
     
    },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Amenities", href: "/amenties" },
  { name: "“Floor Plans & Pricing", href: "/floorplans" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
     { name: "Maintainace Requests", href: "/Maintanace"},
  ];

  const socialIcons = [
    { icon: Facebook, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Youtube, url: "#" },
    { icon: Linkedin, url: "#" },
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [slides.length]);

  return (
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

      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <span
              className={`text-xl font-bold ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              Joinville Suites
            </span>

            {/* Desktop Navigation */}
            <nav
              className={`hidden md:flex items-center space-x-8 transition-all ${
                isScrolled ? "text-white" : "text-white"
              }`}
            >
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="relative font-medium group cursor-pointer">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Contact Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <Button
                variant={isScrolled ? "default" : "outline"}
                className={`hidden md:block px-6 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-white text-black border-white hover:bg-white/90"
                    : "border-white text-black hover:bg-white/10"
                }`}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  } else {
                    window.location.href = "/#contact";
                  }
                }}
              >
                Contact Us
              </Button>

              <button
                className={`transition-all duration-300 ${
                  isScrolled ? "text-white" : "text-white"
                } md:hidden`}
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
            <div className="flex justify-between items-center mb-10">
              <span className="text-xl font-bold text-white">
                Joinville Suites
              </span>
              <button
                className="text-white hover:text-gray-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 flex-grow">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-lg font-medium text-white hover:text-white transition-colors py-2 border-b border-gray-700">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto">
              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-gray-400 text-sm font-medium mb-4">
                  FOLLOW US
                </h3>
                <div className="flex space-x-4">
                  {socialIcons.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-white transition-colors w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                    >
                      <social.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 pt-16">
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-4 leading-tight tracking-tight">
            {slides[currentSlide].title.split(" ").map((word, index) => (
              <span
                key={`word-${index}`}
                className={`inline-block transform transition-all duration-700 delay-${
                  (index + 1) * 200
                } ease-out ${
                  isVisible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                }`}
              >
                {word}{" "}
              </span>
            ))}
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
            className={`w-3 h-3 rounded-full transition-all duration-300 border border-white ${
              index === currentSlide ? "bg-white scale-125" : "bg-transparent"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 hidden md:block">
        <div className="flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <div className="w-0.5 h-12 bg-gradient-to-t from-white to-transparent"></div>
        </div>
      </div>
    </section>
  );
}
