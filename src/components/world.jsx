import React from "react";
import { Headset, DollarSign, Languages} from 'lucide-react';


export function World() {
  return (
    <>
      <div className="py-16 px-0" style={{ backgroundColor: "#DBF1E6" }}>
        <div className="w-full">
          {/* Header */}
          <h2 className="text-center text-3xl md:text-3xl font-medium text-green-600 px-6">
            Redefine Global Mobility With Wipe
          </h2>

          <div className="flex flex-col md:flex-col xl:flex-row items-center gap-12 xl:pl-35 px-14">
            {/* Left Section - World Map */}
            <div className="flex-1 relative">
              <div className="relative w-full lg:w-[800px] h-[400px] lg:h-[700px]">
                {/* World Map Background */}
                <a href="https://letswipe.mozio.com/en-us/" aria-label="Open Wipe Ride booking" className="block">
                  <img
                    src="/src/assets/World-Map.png"
                    alt="World Map"
                    className="w-full h-full object-contain cursor-pointer hover:opacity-95 transition-opacity"
                  />
                </a>
              </div>
            </div>

            {/* Right Section - Call to Action */}
            <div className="flex-1 text-center lg:text-left px-6">
              <div className="mb-8">
                <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-gray-900 leading-tight">
                  <span className="block">DRIVE</span>
                  <span className="block">
                    <span className="text-green-600">OR</span> RIDE
                  </span>
                </h1>
              </div>

              <p className="text-2xl text-gray-600 mb-12">Anywhere, Anytime</p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
                <button className="w-48 px-10 py-5 bg-white border-2 border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition-colors shadow-lg text-lg">
                  Wipe Flex
                </button>
                <button
                  onClick={() => { window.location.href = 'https://letswipe.mozio.com/en-us/'; }}
                  className="w-48 px-10 py-5 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors shadow-lg text-lg"
                >
                  Wipe Ride
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* the numerics section */}

      <div className="bg-white mt-40 py-16 px-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Big city or small town,{' '}
              <span className="text-emerald-500">Wipe ride</span> is always ready
            </h2>
            <p className="text-emerald-600 font-medium text-lg">
              In partnership with Mozio
            </p>
          </div>

          {/* Right side - Stats cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {/* Service Providers Card */}
            <div className="bg-emerald-50 rounded-2xl p-6 text-center hover:bg-emerald-100 transition-colors duration-300">
              <div className="bg-emerald-600 rounded-xl p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Headset className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">3000+</div>
              <div className="text-emerald-600 font-medium">Service Provider</div>
            </div>

            {/* Currencies Card */}
            <div className="bg-emerald-50 rounded-2xl p-6 text-center hover:bg-emerald-100 transition-colors duration-300">
              <div className="bg-emerald-600 rounded-xl p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">39</div>
              <div className="text-emerald-600 font-medium">Currencies</div>
            </div>

            {/* Languages Card */}
            <div className="bg-emerald-50 rounded-2xl p-6 text-center hover:bg-emerald-100 transition-colors duration-300">
              <div className="bg-emerald-600 rounded-xl p-3 w-12 h-12 mx-auto mb-4 flex items-center justify-center">
                <Languages className="w-6 h-6 text-white" />
              </div>
              <div className="text-3xl font-bold text-emerald-600 mb-1">17</div>
              <div className="text-emerald-600 font-medium">Language</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default World;
