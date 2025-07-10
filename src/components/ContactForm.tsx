"use client";

import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// Country code data
const countryCodes = [
  { code: "+971", name: "UAE" },
  { code: "+966", name: "Saudi Arabia" },
  { code: "+1", name: "Canada" },
  { code: "+44", name: "UK" },
  { code: "+91", name: "India" },
  { code: "+92", name: "Pakistan" },
  { code: "+20", name: "Egypt" },
  { code: "+33", name: "France" },
  { code: "+49", name: "Germany" },
  { code: "+7", name: "Russia" },
  { code: "+81", name: "Japan" },
  { code: "+86", name: "China" },
  { code: "+61", name: "Australia" },
  { code: "+27", name: "South Africa" },
  { code: "+55", name: "Brazil" },
  // Add more countries as needed
];

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedCountryCode, setSelectedCountryCode] = useState("+971");

  // EmailJS Configuration
  const EMAILJS_CONFIG = {
    serviceId: "service_mkwm94i",
    templateId: "template_l7o3dew",
    publicKey: "EbrdYh5PNga8iKJii"
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    const form = formRef.current;

    if (!form) return false;

    // Required fields validation
    if (!form.firstName.value) newErrors.firstName = "First name is required";
    if (!form.lastName.value) newErrors.lastName = "Last name is required";
    if (!form.email.value) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(form.email.value)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.phone.value) newErrors.phone = "Phone number is required";
    if (!form.timeframe.value) newErrors.timeframe = "Timeframe is required";
    if (!form.consent.checked) newErrors.consent = "Consent is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);

    try {
      // Combine country code with phone number before sending
      const formData = new FormData(formRef.current as HTMLFormElement);
      formData.set('phone', `${selectedCountryCode} ${formData.get('phone')}`);
      
      await emailjs.sendForm(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.templateId,
        formRef.current as HTMLFormElement,
        EMAILJS_CONFIG.publicKey
      );
      
      setSubmitSuccess(true);
      formRef.current?.reset();
    } catch (error) {
      console.error("Failed to send message:", error);
      alert("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <section id="contact" className="bg-black w-full py-24 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-3xl font-light mb-8">THANK YOU FOR CONTACTING US</h2>
          <p className="mb-10 text-lg">We appreciate your interest and will respond to your inquiry within 24 hours.</p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="bg-white text-black py-4 px-10 text-base hover:bg-gray-100 transition-colors"
          >
            SEND ANOTHER MESSAGE
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact">
      <div className="bg-black w-full py-16 px-6 sm:px-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-white text-3xl font-light mb-10 text-center">
            CONTACT US FOR MORE INFORMATION
          </h2>

          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className={`border-b ${errors.firstName ? "border-red-400" : "border-white/30"}`}>
                  <input
                    name="firstName"
                    type="text"
                    placeholder="Your First Name*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                  />
                </div>
                {errors.firstName && <p className="text-red-400 text-sm mt-2">{errors.firstName}</p>}
              </div>
              <div>
                <div className={`border-b ${errors.lastName ? "border-red-400" : "border-white/30"}`}>
                  <input
                    name="lastName"
                    type="text"
                    placeholder="Your Last Name*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                  />
                </div>
                {errors.lastName && <p className="text-red-400 text-sm mt-2">{errors.lastName}</p>}
              </div>
            </div>

            {/* Contact Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <div className={`border-b ${errors.email ? "border-red-400" : "border-white/30"}`}>
                  <input
                    name="email"
                    type="email"
                    placeholder="Your Email Address*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 text-base focus:outline-none"
                  />
                </div>
                {errors.email && <p className="text-red-400 text-sm mt-2">{errors.email}</p>}
              </div>
              <div>
                <div className={`border-b ${errors.phone ? "border-red-400" : "border-white/30"} flex`}>
                  <select
                    value={selectedCountryCode}
                    onChange={(e) => setSelectedCountryCode(e.target.value)}
                    className="bg-transparent text-white/80 py-3 pr-2 text-base focus:outline-none border-r border-white/30"
                  >
                    {countryCodes.map((country) => (
                      <option key={country.code} value={country.code} className="text-black">
                        {country.code} {country.name}
                      </option>
                    ))}
                  </select>
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Your Phone Number*"
                    className="w-full bg-transparent text-white placeholder-white/50 py-3 pl-3 text-base focus:outline-none"
                  />
                </div>
                {errors.phone && <p className="text-red-400 text-sm mt-2">{errors.phone}</p>}
              </div>
            </div>

            {/* Timeframe Dropdown */}
            <div>
              <div className={`border-b ${errors.timeframe ? "border-red-400" : "border-white/30"}`}>
                <select 
                  name="timeframe" 
                  className="w-full bg-transparent text-white py-3 text-base focus:outline-none appearance-none"
                >
                  <option value="">Select Timeframe*</option>
                  <option className="text-black" value="immediate">Immediate</option>
                  <option className="text-black" value="30-days">Within 30 Days</option>
                  <option className="text-black" value="60-days">Within 60 Days</option>
                  <option className="text-black" value="90+ days">90+ Days</option>
                </select>
              </div>
              {errors.timeframe && <p className="text-red-400 text-sm mt-2">{errors.timeframe}</p>}
            </div>

            {/* Consent */}
            <div className="flex items-start pt-4">
              <input
                name="consent"
                type="checkbox"
                id="consent"
                className="mt-1 h-4 w-4 bg-transparent border-white focus:ring-0"
              />
              <label htmlFor="consent" className="text-white/80 text-sm ml-3">
                I agree to the privacy policy and authorize the processing of my personal data*
              </label>
              {errors.consent && <p className="text-red-400 text-sm ml-3">{errors.consent}</p>}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-white text-black py-4 mt-8 text-base hover:bg-gray-100 transition-colors ${
                isSubmitting ? "opacity-70 cursor-not-allowed" : ""
              }`}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  PROCESSING YOUR REQUEST...
                </span>
              ) : (
                "SUBMIT YOUR INQUIRY"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}