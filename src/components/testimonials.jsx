export function Testimonials() {
  return (
    <>

      <div className="mt-16 p-5 md:p-28">
        <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-8 lg:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-white text-3xl lg:text-4xl font-bold text-center mb-12">What they say about us?</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

              {/* Testimonial 1 - Kar S. */}
              <div className="bg-white rounded-2xl p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img
                      src="src/assets/testimonials/karl.png"
                      alt="Kar S."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Kar S.</h4>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The cab was waiting at our apartment as requested for 4:45am Morning. Driver was professional and ride was smooth. Reservation was simple and quick. Highly recommend without a doubt.
                </p>
              </div>

              {/* Testimonial 2 - Charles J. */}
              <div className="bg-gray-800 rounded-2xl p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img
                      src="src/assets/testimonials/charles.png"
                      alt="Charles J."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-400">Charles J.</h4>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  The ride was a surprise for my wife's visit. She was thrilled and the driver was extremely nice.
                </p>
              </div>

              {/* Testimonial 3 - Talvin D. */}
              <div className="bg-white rounded-2xl p-6 relative">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden mr-4">
                    <img
                      src="src/assets/testimonials/talvin.png"
                      alt="Talvin D."
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-green-600">Talvin D.</h4>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed">
                  My ride and driver were great, he was very nice, talkative but not too much and ON TIME which is very important to me. I give your service a 5 out of 5 stars.
                </p>
              </div>

            </div>
          </div>

          {/* Background decorative elements */}
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/5 rounded-full"></div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="mt-10 text-center p-5 md:p-28">
        <div className="border-2 border-dashed border-green-300 rounded-2xl p-8 bg-green-50/50">
          <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            Stay <span className="text-green-600">connected</span> for travel tips, exclusive <span className="text-green-600">offers</span> & updates!
          </h2>
          <a href="https://www.linkedin.com/company/wipe-technologies/" target="_blank" rel="noopener noreferrer" className="mt-6 inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300">
            Follow Us
          </a>
        </div>
      </div>


    </>
  )
}