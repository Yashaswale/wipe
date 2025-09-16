import { useState } from "react";
import Navbar from "./navbar";
import Footer from "./footer";

export default function Flexpage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Send form data to FormSubmit.co
    const form = e.target;
    fetch(form.action, {
      method: form.method,
      body: new FormData(form),
      headers: { Accept: "application/json" },
    }).then(() => {
      setIsSubmitted(true);
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto px-2 py-12">
        {/* Hero Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold text-emerald-500">
                Wipe Flex
              </h1>
              <p className="text-lg lg:text-xl text-gray-700 leading-relaxed">
                Whether it's a Daily Commute, a Weekend Gateway or a Long Term
                need,{" "}
                <span className="text-emerald-500 font-semibold">Wipe Flex</span>{" "}
                gives you instant access to best cars across the{" "}
                <span className="text-emerald-500 font-semibold">World.</span>
              </p>
            </div>

            {/* Right Column - Car Card */}
            <div className="relative">
              <div className="bg-transparent rounded-xl shadow-none relative overflow-visible">
                <img
                  src="/assets/flexpage/main_car.png"
                  alt="White BMW car"
                  className="w-full h-64 lg:h-80 object-cover object-right rounded-2xl"
                />
                {/* Overlapping Rent Now Button */}
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="absolute -bottom-3 -right-2 bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-xl border-4 border-white"
                >
                  Rent Now
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Wide Vehicle Selection */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
            <img
              src="/assets/flexpage/main_car.png"
              alt="Wide vehicle selection"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Wide Vehicle</h3>
              <h3 className="text-2xl font-bold">Selection</h3>
            </div>
          </div>

          {/* Quick Paperless Booking */}
          <div
            className="rounded-2xl p-8 flex items-center justify-center text-center shadow-lg transition-colors duration-200 cursor-pointer group"
            style={{
              background:
                "var(--Lw, linear-gradient(91deg, #15B667 0%, #09502D 100%))",
            }}
          >
            <div className="text-white">
              <div className="mb-4">
                <div className="w-16 h-16 bg-emerald-400/30 rounded-full mx-auto flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <svg
                    className="w-8 h-8"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Quick Paperless</h3>
              <h3 className="text-2xl font-bold">Booking</h3>
            </div>
          </div>

          {/* Enjoy your Driving */}
          <div className="relative overflow-hidden rounded-2xl shadow-lg group cursor-pointer">
            <img
              src="/assets/flexpage/right_img.png"
              alt="People enjoying driving"
              className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-white">
              <h3 className="text-2xl font-bold mb-2">Enjoy your</h3>
              <h3 className="text-2xl font-bold">Driving</h3>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16">
          <div className="bg-gradient-to-r from-[#C7EDDB] to-[#C7EDDB] rounded-3xl p-8 lg:p-12 relative overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left Content */}
              <div className="space-y-6">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  You <span className="text-emerald-500">Drive</span> it.
                </h2>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  You <span className="text-emerald-500">Own</span> the Moment
                </h2>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  Rent Now
                </button>
              </div>

              {/* Right Content - Car Image */}
              <div className="relative bg-transparent">
                <img
                  src="/assets/flexpage/ex_car.png"
                  alt="Black luxury SUV"
                  className="w-full h-40 lg:h-56 object-contain bg-transparent rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8 relative">
            <button
              onClick={() => {
                setIsModalOpen(false);
                setIsSubmitted(false);
              }}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700 text-xl"
            >
              ×
            </button>
            {!isSubmitted ? (
              <>
                <h2 className="text-2xl font-bold text-emerald-600 mb-4 text-center">
                  Enter Your Email
                </h2>
                <form
                  id="rentalCompanyForm"
                  action="https://formsubmit.co/ajax/connect@letswipe.io"
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  />
                  <button
                    type="submit"
                    className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 rounded-xl font-semibold transition-all duration-200"
                  >
                    Submit
                  </button>
                </form>
              </>
            ) : (
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold text-emerald-600">
                  Thank You!
                </h2>
                <p className="text-gray-600">
                  We will get back to you. Check email for updates.
                </p>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-6 py-2 rounded-xl font-semibold"
                >
                  Close
                </button>
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}
