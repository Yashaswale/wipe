import React, { useState, useEffect } from 'react';
import { Search, Globe, Plane, Building } from 'lucide-react';
import Select from 'react-select';
import { getNames } from 'country-list';

const textVariations = [
  "Seamless Rides, Anytime, Anywhere",
  "Ride Globally , Arrive in Style",
  "Wherever You Go, We're Already There."
];

const leftColumnImages = [
  { src: "src/assets/countries/Berlin.png", city: "Berlin" },
  { src: "src/assets/countries/Paris.png", city: "Paris" },
  { src: "src/assets/countries/Singapore2.png", city: "Singapore" },
  { src: "src/assets/countries/NewYork.png", city: "New York" },
  { src: "src/assets/countries/UAE.png", city: "UAE" }
];

const rightColumnImages = [
  { src: "src/assets/countries/Tokyo.png", city: "Tokyo" },
  { src: "src/assets/countries/London.png", city: "London" },
  { src: "src/assets/countries/Lisbon.png", city: "Lisbon" },
  { src: "src/assets/countries/Madrid.png", city: "Madrid" },
  { src: "src/assets/countries/Bankok.png", city: "Bankok" }
];

// Build country options for the autocomplete using full country list
const countryOptions = getNames().map((countryName) => ({
  value: countryName,
  label: countryName,
}));

const ImageCard = ({ src, city, className = "" }) => (
  <div className={`relative overflow-hidden rounded-xl shadow-lg aspect-square ${className}`}>
    <img
      src={src}
      alt={city}
      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
    />
    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
      <div className="p-4 w-full">
        <span className="text-white font-medium text-lg text-center block" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.8)', fontFamily: 'Codec Cold Trial, sans-serif' }}>
          {city}
        </span>
      </div>
    </div>
  </div>
);

const ScrollingColumn = ({ images, direction }) => {
  const doubleImages = [...images, ...images];

  return (
    <div className="overflow-hidden h-full relative">
      <div
        className={`flex flex-col gap-6 ${
          direction === "up" ? "animate-scroll-up" : "animate-scroll-down"
        }`}
      >
        {doubleImages.map((image, index) => (
          <ImageCard key={`${image.city}-${index}`} {...image} />
        ))}
      </div>
    </div>
  );
};

const WipeLanding = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % textVariations.length);
        setIsTransitioning(false);
      }, 600); // Slight delay to wait for the slice-out to finish before changing text
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const slicedText = textVariations[currentTextIndex].split(" ").map((word, index) => (
    <span
      key={index}
      className={`transition-opacity duration-300 ${
        isTransitioning ? "opacity-0" : "opacity-100"
      }`}
    >
      <span
        className={word === "Seamless" || word === "Globally" || word === "Already" ? "text-green-600" : ""}
      >
        {word}{" "}
      </span>
    </span>
  ));

  return (
    <div className="min-h-screen" style={{ background: "linear-gradient(to top left, #DBF1E6, white)" }}>
      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="flex-1 px-6 py-12 md:px-12 lg:pr-8">
          <div className="max-w-2xl">
            <h2 className="text-3xl text-green-600 font-semibold mb-4" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
              Let's Wipe
            </h2>

            {/* Animated Text */}
            <div className="mb-12 h-56 overflow-hidden px-2 sm:px-4 flex items-center">
              <h1
                className={`text-5xl md:text-7xl font-bold text-gray-900 leading-tight transition-transform duration-700 ease-in-out ${
                  isTransitioning ? "sliced-text slicing-out" : "sliced-text"
                }`}
                style={{ fontFamily: "Codec Cold Trial, sans-serif" }}
              >
                {slicedText}
              </h1>
            </div>

            {/* Search and Button */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <div className="relative flex-1">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Select
                  inputId="country-select"
                  options={countryOptions}
                  value={selectedCountry}
                  onChange={(option) => setSelectedCountry(option)}
                  placeholder="Pick your country"
                  classNamePrefix="country"
                  styles={{
                    control: (base, state) => ({
                      ...base,
                      borderRadius: 9999,
                      borderColor: state.isFocused ? "#34D399" : "#A7F3D0",
                      boxShadow: state.isFocused ? "0 0 0 2px rgba(52, 211, 153, 0.5)" : "none",
                      paddingLeft: "2.5rem",
                      backgroundColor: "#ECFDF5",
                      minHeight: "56px",
                    }),
                    placeholder: (base) => ({
                      ...base,
                      fontSize: "1.125rem",
                    }),
                    singleValue: (base) => ({
                      ...base,
                      fontSize: "1.125rem",
                    }),
                    indicatorSeparator: () => ({ display: "none" }),
                  }}
                  theme={(theme) => ({
                    ...theme,
                    colors: {
                      ...theme.colors,
                      primary: "#10B981",
                      primary25: "#D1FAE5",
                    },
                  })}
                />
              </div>
              <button
                onClick={() => {
                  window.location.href = "https://letswipe.mozio.com/en-us/";
                }}
                className="px-8 py-4 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors shadow-lg text-lg"
                style={{ fontFamily: "Codec Cold Trial, sans-serif" }}
              >
                Lets Ride
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-12">
              <div className="bg-green-100 p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Globe className="text-white w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
                  180+
                </div>
                <div className="text-lg text-gray-600" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
                  Countries
                </div>
              </div>

              <div className="bg-green-100 p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Plane className="text-white w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
                  3500+
                </div>
                <div className="text-lg text-gray-600" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
                  Airports
                </div>
              </div>

              <div className="bg-green-100 p-6 rounded-2xl text-center">
                <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Building className="text-white w-6 h-6" />
                </div>
                <div className="text-4xl font-bold text-green-600 mb-2" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
                  2500+
                </div>
                <div className="text-lg text-gray-600" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
                  Cities
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className="flex items-center text-lg text-gray-600" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
              <span className="mr-3">In Partnership With</span>
              <Globe className="w-5 h-5 mr-2 text-green-600" />
              <span className="font-semibold text-gray-800">Global Travel Platforms</span>
            </div>
          </div>
        </div>

        {/* Right Scrolling Images */}
        <div className="lg:w-[500px] flex gap-6 px-6 lg:pr-2">
          <div className="flex-1 h-[700px] relative">
            <ScrollingColumn images={leftColumnImages} direction="down" />
          </div>
          <div className="flex-1 h-[700px] relative">
            <ScrollingColumn images={rightColumnImages} direction="up" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WipeLanding;
