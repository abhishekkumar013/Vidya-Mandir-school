import React from "react";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div id="home" className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <img
          src="school.jpg"
          alt="Rural school children"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 via-gray-900/75 to-gray-900/60"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="text-center">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-white mb-6 tracking-tight">
              UDGAM <span className="text-indigo-400">Vidya Mandir</span>
            </h1>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-green-200 mb-6 tracking-tight">
              उद्गम विद्या मंदिर
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 mb-4 font-medium">
              UPLIFTING EDUCATION IN VILLAGE
            </p>

            {/* <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              ग्रामीण शिक्षा: प्रगति की ओर एक कदम
            </p> */}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <a
              href="#about"
              className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-full text-white bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105"
            >
              Learn More
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-lg font-medium rounded-full text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              Admissions
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg
          className="w-full h-24 text-gray-50"
          viewBox="0 0 1440 74"
          fill="none"
        >
          <path
            d="M0,32L48,37.3C96,43,192,53,288,58.7C384,64,480,64,576,58.7C672,53,768,43,864,42.7C960,43,1056,53,1152,53.3C1248,53,1344,43,1392,37.3L1440,32L1440,74L1392,74C1344,74,1248,74,1152,74C1056,74,960,74,864,74C768,74,672,74,576,74C480,74,384,74,288,74C192,74,96,74,48,74L0,74Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hero;
