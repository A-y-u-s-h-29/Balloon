// components/Navbar.jsx
import React, { useState } from 'react';
import { FaPhone, FaChevronDown, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  return (
    <nav className="bg-white shadow-lg relative">
      {/* Desktop Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-black">Best Balloon</span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8 ml-auto">

            <a href="#home" className="text-gray-700 hover:text-[#FF6F61] px-3 py-2 text-sm font-medium transition duration-300">
              Home
            </a>
            
            {/* Services Dropdown */}
            <div className="relative">
              <button 
                onClick={toggleServices}
                className="text-gray-700 hover:text-[#FF6F61] px-3 py-2 text-sm font-medium flex items-center transition duration-300"
              >
                Services
                <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              {isServicesOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  <a href="#birthday" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#FF6F61]">
                    Birthday Parties
                  </a>
                  <a href="#wedding" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#FF6F61]">
                    Weddings
                  </a>
                  <a href="#corporate" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#FF6F61]">
                    Corporate Events
                  </a>
                  <a href="#custom" className="block px-4 py-2 text-sm text-gray-700 hover:bg-pink-50 hover:text-[#FF6F61]">
                    Custom Designs
                  </a>
                </div>
              )}
            </div>

            <a href="#gallery" className="text-gray-700 hover:text-[#FF6F61] px-3 py-2 text-sm font-medium transition duration-300">
              Gallery
            </a>
            <a href="#contact" className="text-gray-700 hover:text-[#FF6F61] px-3 py-2 text-sm font-medium transition duration-300">
              Contact
            </a>
          </div>

          {/* Call Now Button - Desktop */}
          <div className="hidden md:flex items-center">
            <a 
              href="tel:+1234567890"
              className="bg-[#FF6F61] hover:bg-[#e02e1d] text-white px-6 py-2 rounded-full font-semibold flex items-center transition duration-300 shadow-md"
            >
              <FaPhone className="mr-2" />
              CALL NOW
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-pink-[#FF6F61] focus:outline-none focus:text-pink-[#FF6F61] p-2"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#home" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
            
            {/* Mobile Services Dropdown */}
            <div className="px-3 py-2">
              <button 
                onClick={toggleServices}
                className="flex items-center justify-between w-full text-base font-medium text-gray-700 hover:text-pink-500"
              >
                Services
                <FaChevronDown className={`ml-1 text-xs transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isServicesOpen && (
                <div className="mt-2 pl-4 space-y-2">
                  <a 
                    href="#birthday" 
                    className="block py-2 text-sm text-gray-600 hover:text-pink-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Birthday Parties
                  </a>
                  <a 
                    href="#wedding" 
                    className="block py-2 text-sm text-gray-600 hover:text-pink-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Weddings
                  </a>
                  <a 
                    href="#corporate" 
                    className="block py-2 text-sm text-gray-600 hover:text-pink-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Corporate Events
                  </a>
                  <a 
                    href="#custom" 
                    className="block py-2 text-sm text-gray-600 hover:text-pink-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Custom Designs
                  </a>
                </div>
              )}
            </div>

            <a 
              href="#gallery" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-pink-500 hover:bg-gray-50 rounded-md"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            
            {/* Mobile Call Now Button */}
            <div className="px-3 py-4">
              <a 
                href="tel:+1234567890"
                className="w-full bg-[#FF6F61] hover:bg-[#FF6F61] text-white px-6 py-3 rounded-full font-semibold flex items-center justify-center transition duration-300 shadow-md"
                onClick={() => setIsMenuOpen(false)}
              >
                <FaPhone className="mr-2" />
                CALL NOW
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;