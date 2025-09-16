export function WhyWipe() {
  return (

    <>
    <div className="mt-16 px-4 sm:px-6 md:px-10 lg:px-28">
          <div className="bg-gray-900 rounded-2xl p-6 sm:p-8 lg:p-12 relative overflow-hidden min-h-[260px] sm:min-h-[300px] lg:min-h-[320px]">
            <div className="absolute inset-0">
              <img 
                src="/assets/CO2.png" 
                alt="Forest aerial view" 
                className="w-full h-full object-cover opacity-60"
              />
            </div>
            <div className="relative z-10 max-w-3xl">
              <h2 className="text-white text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
                Every ride counts<br />
                see how much <span className="text-green-400">CO₂</span><br />
                you offset in real time
              </h2>
              <a href="https://letswipe.mozio.com/en-us/" className="mt-6 sm:mt-8 bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-semibold text-sm sm:text-base lg:text-lg transition-colors duration-300">
                Book Ride Now
              </a>
            </div>
          </div>
        </div>

    <div className="mt-16 px-4 sm:px-6 md:px-10 lg:px-28 grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8">
          
          {/* Left Column - Why Wipe Matters */}
          <div className="md:col-span-3">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-green-600 mb-6 sm:mb-8 lg:mb-10">Why Wipe Matters</h2>
            
            <div className="space-y-4 sm:space-y-6">
              
              {/* Global Scale */}
              <div className="flex items-start gap-4 p-4 sm:p-5 bg-green-50 rounded-xl border border-green-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-1">Global Scale</h3>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">designed to grow across continents with a unified customer experience.</p>
                </div>
              </div>

              {/* Partner Network */}
              <div className="flex items-start gap-4 p-4 sm:p-5 bg-green-50 rounded-xl border border-green-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-1">Partner Network</h3>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">working with trusted providers to ensure access in 180+ countries.</p>
                </div>
              </div>

              {/* Sustainability at the Core */}
              <div className="flex items-start gap-4 p-4 sm:p-5 bg-green-50 rounded-xl border border-green-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-1">Sustainability at the Core</h3>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">aligned with global net-zero goals, encouraging greener choices.</p>
                </div>
              </div>

              {/* Technology-Driven */}
              <div className="flex items-start gap-4 p-4 sm:p-5 bg-green-50 rounded-xl border border-green-100">
                <div className="w-9 h-9 sm:w-10 sm:h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-green-600 mb-1">Technology-Driven</h3>
                  <p className="text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">simplifying journeys through smart solutions and seamless access.</p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Column - Our Vision */}
          <div className="md:col-span-2">
            <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 sm:p-8 h-full min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Our Vision</h3>
                <p className="text-green-100 text-base sm:text-lg lg:text-xl leading-relaxed mb-6 sm:mb-8 lg:mb-10">
                  Wipe is not just about land mobility today. Our long-term mission is to expand beyond cars and into the next generation of transport — from smart integrations to new mobility solutions that redefine how people connect with cities and destinations.
                </p>
              </div>
              
              {/* Vision Image */}
              <div className="absolute bottom-0 right-0 w-48 h-auto sm:w-64 sm:h-64 lg:w-80 lg:h-80 xl:w-96 xl:h-96 pointer-events-none">
                <img 
                  src="/assets/Vision.png" 
                  alt="Vision" 
                  className="w-full h-full object-contain object-bottom"
                />
              </div>
            </div>
          </div>

        </div>

        </>

  )
}