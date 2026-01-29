import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Globe, Plane, Building } from 'lucide-react';
import Select from 'react-select';
import { getNames } from 'country-list';

const textVariations = [
  "Seamless Rides, Anytime, Anywhere",
  "Ride Globally, Arrive in Style",
  "Wherever You Go, We're Already There.",
  "From Roads to Orbit Earth to Space",
];

const leftColumnImages = [
  { src: "/assets/countries/Berlin.png", city: "Berlin" },
  { src: "/assets/countries/Paris.png", city: "Paris" },
  { src: "/assets/countries/Singapore2.png", city: "Singapore" },
  { src: "/assets/countries/NewYork.png", city: "New York" },
  { src: "/assets/countries/UAE.png", city: "UAE" }
];

const rightColumnImages = [
  { src: "/assets/countries/Tokyo.png", city: "Tokyo" },
  { src: "/assets/countries/London.png", city: "London" },
  { src: "/assets/countries/Lisbon.png", city: "Lisbon" },
  { src: "/assets/countries/Madrid.png", city: "Madrid" },
  { src: "/assets/countries/Bankok.png", city: "Bankok" }
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
  const [showModal, setShowModal] = useState(false);
  const [showSplash, setShowSplash] = useState(true);
  const [splashSlideUp, setSplashSlideUp] = useState(false);
  const [splashImageLoaded, setSplashImageLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setSplashSlideUp(true);
    }, 5000);

    const modalTimer = setTimeout(() => {
      setShowSplash(false);
      setShowModal(true);
    }, 10000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(modalTimer);
    };
  }, []);

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
        className={word === "Seamless" || word === "Globally," || word === "Already" || word === "Space" || word === "Earth" ? "text-green-600" : ""}
      >
        {word}{" "}
      </span>
    </span>
  ));

  return (
    <div className="min-h-screen " style={{ background: "linear-gradient(to top left, #DBF1E6, white)" }}>
      {/* Splash Screen */}
      {showSplash && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center bg-white transition-all duration-1000 ${
            splashSlideUp ? '-translate-y-full' : 'translate-y-0'
          }`}
          style={{
            transitionProperty: 'transform',
            transitionDuration: '1000ms',
          }}
        >
          {!splashImageLoaded && (
            <div className="absolute inset-0 z-40 flex items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 border-4 border-t-transparent border-cyan-400 rounded-full animate-spin mb-4" />
                <div className="text-sm text-gray-700">Loading…</div>
              </div>
            </div>
          )}

          <img
            src="/assets/Wipe.png"
            alt="Wipe Logo"
            className="w-full h-full object-cover"
            onLoad={() => setSplashImageLoaded(true)}
          />
        </div>
      )}

      <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)]">
        {/* Left Content */}
        <div className="flex-1 px-6 py-20 md:px-12 lg:pr-8">
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
              <button
                onClick={() => navigate('/explore-space')}
                className="px-8 py-4 text-white font-semibold rounded-full transition-all shadow-lg text-lg relative overflow-hidden group"
                style={{
                  fontFamily: "Codec Cold Trial, sans-serif",
                  backgroundImage: 'url(/assets/space/space2.jpg)',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              >
                <span className="relative z-10">Explore Space</span>
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

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-lg z-50 flex items-start sm:items-center justify-center p-4 sm:p-6">
          <div className="relative w-full max-w-full sm:max-w-3xl md:max-w-4xl rounded-2xl overflow-hidden shadow-2xl" style={{ minHeight: '260px' }}>
            {/* Video Background */}
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            >
              <source src="/assets/space_vid.mp4" type="video/mp4" />
            </video>

            {/* Gradient Overlay */}
            {/* <div className="absolute inset-0 bg-gradient-to-r from-cyan-900/70 to-blue-900/70"></div> */}

            {/* Content Container */}
            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:p-16">
              {/* Left Text Content */}
              <div className="flex-1 sm:pr-8 mb-6 sm:mb-0">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight" style={{ fontFamily: "Codec Cold Trial, sans-serif" }}>
                  Explore worlds first and only mobility ecosystem connecting <span className="text-cyan-200">Earth & Space!</span>
                </h2>
              </div>

              {/* Right Button */}
              <div className="flex-shrink-0">
                <button
                  onClick={() => {
                    setShowModal(false);
                    navigate('/explore-space');
                  }}
                  className="px-10 py-4 sm:px-12 sm:py-5 bg-white text-blue-600 font-bold text-lg rounded-full hover:bg-cyan-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                  style={{ fontFamily: "Codec Cold Trial, sans-serif" }}
                >
                  Explore Now
                </button>
              </div>
            </div>

            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm z-20"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default WipeLanding;
