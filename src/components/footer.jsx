import React from 'react';
import { MapPin, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-emerald-50 to-green-100 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Main content */}
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Building the future of Global{' '}
              <span className="text-green-600">Mobility</span> <br/>
              with 
              <span className="text-green-600"> Wipe</span>
            </h2>
          </div>

          {/* Right side - Contact info */}
          <div className="space-y-6 lg:text-right lg:mt-14">
            {/* <div className="flex items-center lg:justify-end space-x-3">
              <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="text-gray-700">
                <div>8502 Preston Rd. Inglewood, Maine</div>
                <div>98380, USA</div>
              </div>
            </div> */}
            
            <div className="flex items-center lg:justify-end space-x-3">
              <Mail className="w-5 h-5 text-emerald-600 flex-shrink-0" />
              <div className="text-gray-700">connect@letswipe.io</div>
            </div>

            {/* Social Media Links */}
            <div className="flex items-center lg:justify-end space-x-3">
              <span className="text-gray-700 font-medium">Connect with us on</span>
              <a 
                href="https://www.linkedin.com/company/wipe-technologies/" 
                className="inline-flex items-center bg-green-600 hover:bg-emerald-700 text-white px-3 py-2 rounded-full transition-colors duration-200 group"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="w-5 h-5 mr-2 text-white" />
                <span className="font-medium">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-200 my-12"></div>

        {/* Bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
          {/* Navigation links */}
          <nav className="flex flex-wrap justify-center md:justify-start space-x-8">
            <a href="#why-wipe" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
              WhyWipe
            </a>
            <a href="#travel-cards" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Services
            </a>
            <a href="#country-cards" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Wipe Ride
            </a>
            <a href="https://www.finalrentals.com/wipe/696bf23197c402c83605b03ffb549e41" className="text-gray-600 hover:text-emerald-600 transition-colors duration-200 font-medium">
              Wipe Flex
            </a>
          </nav>

          {/* Copyright */}
          <div className="text-gray-500 text-sm">
            © 2024 Wipe Technologies. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;