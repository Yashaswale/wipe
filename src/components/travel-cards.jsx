import { ArrowUpRight } from 'lucide-react';
import bgDesign from '/assets/bg_design.png';

export function TravelCards() {
  const bookingUrl = 'https://letswipe.mozio.com/en-us/';

  return (
    <div className="min-h-screen bg-white p-4 lg:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 h-auto lg:h-[600px]">
          
          {/* First Column - 3 Cards */}
          <div className="flex flex-col gap-4 h-full">
            
            {/* Wipe Ride Offers Card */}
            <div className="flex-1">
              <div
                onClick={() => { window.location.href = bookingUrl; }}
                role="link"
                tabIndex={0}
                className="rounded-2xl p-6 h-full min-h-[180px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(91deg, #15B667 0%, #09502D 100%)',
                }}
              >
                {/* Decorative image anchored to bottom at 90% width */}
                <img
                  src={bgDesign}
                  alt="decorative"
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[90%] h-auto z-0 pointer-events-none select-none"
                />
                {/* Hover darken overlay */}
                <div className="absolute inset-0 z-20 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative z-30 h-full flex flex-col justify-center items-center text-center gap-2">
                  <div>
                    <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">Wipe Ride Offers</h3>
                    <p className="text-white/70 text-base">In Partnership With</p>
                    <p className="text-white/70 text-xl font-medium">Global Travel Partner</p>
                  </div>
                  {/* <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div> */}
                </div>
              </div>
            </div>

            {/* Economy Card */}
            <div className="flex-1">
              <div
                onClick={() => { window.location.href = bookingUrl; }}
                role="link"
                tabIndex={0}
                className="bg-gray-900 rounded-2xl p-6 h-full min-h-[180px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img 
                    src="/assets/travel-img/Economy.png" 
                    alt="City street" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mt-auto">
                    <h3 className="text-green-400 text-3xl md:text-3xl font-semibold mb-1">Economy</h3>
                    <p className="text-white text-sm">Affordable daily rides</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Card */}
            <div className="flex-1">
              <div
                onClick={() => { window.location.href = bookingUrl; }}
                role="link"
                tabIndex={0}
                className="bg-gray-900 rounded-2xl p-6 h-full min-h-[180px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img 
                    src="/assets/travel-img/Premium.png" 
                    alt="Luxury car" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mt-auto">
                    <h3 className="text-green-400 text-2xl md:text-3xl font-semibold mb-1">Premium</h3>
                    <p className="text-white text-sm">Luxury rides with top-rated drivers</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Second Column - Large Hero Image */}
          <div className="h-full min-h-[300px] lg:min-h-full">
            <div
              onClick={() => { window.location.href = bookingUrl; }}
              role="link"
              tabIndex={0}
              className="rounded-2xl h-full relative overflow-hidden group cursor-pointer"
            >
              <img 
                src="/assets/travel-img/Center.png" 
                alt="Sports car on bridge" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          </div>

          {/* Third Column - 3 Cards */}
          <div className="flex flex-col gap-4 h-full">
            
            {/* Business Card */}
            <div className="flex-1">
              <div
                onClick={() => { window.location.href = bookingUrl; }}
                role="link"
                tabIndex={0}
                className="bg-gray-900 rounded-2xl p-6 h-full min-h-[180px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-transparent"></div>
                <div className="absolute inset-0">
                  <img 
                    src="/assets/travel-img/Business.png" 
                    alt="Business person in car" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mt-auto">
                    <h3 className="text-green-400 text-2xl md:text-3xl font-semibold mb-1">Business</h3>
                    <p className="text-white text-sm">Comfortable rides for work & travel</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Airport Transfers Card */}
            <div className="flex-1">
              <div
                onClick={() => { window.location.href = bookingUrl; }}
                role="link"
                tabIndex={0}
                className="bg-gray-900 rounded-2xl p-6 h-full min-h-[180px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
              >
                <div className="absolute inset-0">
                  <img 
                    src="/assets/travel-img/Airport.png" 
                    alt="Airport transfer" 
                    className="w-full h-full object-cover opacity-40 group-hover:opacity-50 transition-opacity duration-300"
                  />
                </div>
                <div className="relative z-10 h-full flex flex-col">
                  <div className="mt-auto">
                    <h3 className="text-green-400 text-2xl md:text-3xl font-semibold mb-1">Airport Transfers</h3>
                    <p className="text-white text-sm">Stress-free pickups & drop-offs</p>
                  </div>
                  <div className="absolute bottom-4 right-4">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-400 transition-colors duration-300">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Drive or Ride Card */}
            <div className="flex-1">
              <div
                onClick={() => { window.location.href = bookingUrl; }}
                role="link"
                tabIndex={0}
                className="rounded-2xl p-6 h-full min-h-[180px] relative overflow-hidden group hover:scale-[1.02] transition-all duration-300 cursor-pointer"
                style={{
                  background: 'linear-gradient(91deg, #15B667 0%, #09502D 100%)',
                }}
              >
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 h-full flex flex-col justify-center items-center text-center">
                  <h3 className="text-white text-2xl lg:text-3xl font-bold mb-2">Drive or Ride</h3>
                  <p className="text-white/70 text-base">The power of choice with Wipe</p>
                </div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-white/10 rounded-full"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-white/5 rounded-full"></div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  )
}