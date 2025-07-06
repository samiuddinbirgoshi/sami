"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X, Facebook, Instagram, Twitter, Youtube, Linkedin } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Amenities", href: "/amenitiesPage" },
    { name: "Floor Plans", href: "/floorplans" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialIcons = [
    { icon: Facebook, url: "#" },
    { icon: Instagram, url: "#" },
    { icon: Twitter, url: "#" },
    { icon: Youtube, url: "#" },
    { icon: Linkedin, url: "#" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Sticky Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? "bg-black shadow-lg py-2" : "bg-transparent py-4"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-white">Joinville Suites</span>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 text-white">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href}>
                  <span className="relative font-medium group cursor-pointer">
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full" />
                  </span>
                </Link>
              ))}
            </nav>

            {/* Contact Button & Mobile Menu Icon */}
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
                className="text-white md:hidden"
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
              <span className="text-xl font-bold text-white">Joinville Suites</span>
              <button
                className="text-white hover:text-gray-300"
                onClick={() => setMobileMenuOpen(false)}
              >
                <X className="h-7 w-7" />
              </button>
            </div>

            <nav className="flex flex-col space-y-6 flex-grow">
              {navItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                  <span className="text-lg font-medium text-white hover:text-white py-2 border-b border-gray-700">
                    {item.name}
                  </span>
                </Link>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-700">
              <h3 className="text-gray-400 text-sm font-medium mb-4">FOLLOW US</h3>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700"
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
