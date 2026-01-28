import { useState, useEffect } from 'react';
import { Compass, Rocket, Users, Layers, Download, X } from 'lucide-react';

function ExploreSpace() {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [showModal]);

  return (
    <div className="min-h-screen text-white overflow-x-hidden relative">
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage: 'url(/assets/space/BG.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      <div className="relative z-10">
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <div className="max-w-6xl mx-auto text-center space-y-8 flex-1 flex flex-col justify-center">
            <p className="text-cyan-400 text-sm tracking-widest uppercase font-light">
              Pioneering the Future
            </p>

            <h1 className="text-6xl md:text-8xl font-bold tracking-tight">
              SPACE TOURISM
              <br />
              <span className="text-cyan-400">ROADMAP</span>
            </h1>

            <p className="text-2xl font-light text-gray-300 max-w-3xl mx-auto">
              From Near-Space Experiences to Lunar Living
            </p>

            <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Explore the phased evolution of commercial space travel — engineered for safety, scalability,
              and long-term human presence beyond Earth.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-6">
              <button className="group flex items-center gap-2 px-8 py-4 bg-cyan-500/10 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                <Compass className="w-5 h-5" />
                <span className="font-medium">Explore the Roadmap</span>
              </button>
              <button
                onClick={() => setShowModal(true)}
                className="group flex items-center gap-2 px-8 py-4 bg-cyan-500/10 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all duration-300"
              >
                <Rocket className="w-5 h-5" />
                <span className="font-medium">Register Interest</span>
              </button>
            </div>
          </div>

          <div className="absolute bottom-20 left-0 right-0">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-center justify-between">
                {['TODAY', 'NEAR - TERM', 'MID - TERM', 'FUTURE', 'HORIZON'].map((phase, idx) => (
                  <div key={phase} className="flex flex-col items-center gap-3 flex-1">
                    <div className={`w-4 h-4 rounded-full ${idx === 0 ? 'bg-cyan-400' : 'bg-gray-600'} relative`}>
                      {idx < 4 && (
                        <div className="absolute left-full top-1/2 w-screen h-px bg-gradient-to-r from-gray-600 to-transparent -translate-y-1/2" />
                      )}
                    </div>
                    <span className={`text-xs tracking-wider ${idx === 0 ? 'text-cyan-400' : 'text-gray-500'} font-medium`}>
                      {phase}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-5xl font-bold">
                Evolution of <span className="text-cyan-400">Space Tourism</span>
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Explore each phase of humanity's journey to becoming a spacefaring civilization
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: 'NEAR-SPACE CAPSULE',
                  subtitle: 'STRATOSPHERIC EXPERIENCE',
                  badge: '01',
                  image: '/assets/space/img5.png',
                  altitude: '24-40 km',
                  orbit: 'No',
                  gravity: '1g',
                  capacity: '6-8',
                  volume: '~30-50 m³',
                  duration: '~6-12 Hours',
                  status: 'Commercial',
                  statusColor: 'text-cyan-400'
                },
                {
                  title: 'SUBORBITAL SPACEFLIGHT',
                  subtitle: 'EDGE OF SPACE',
                  badge: '02',
                  image: '/assets/space/img6.png',
                  altitude: '80-110 km',
                  orbit: '80-110 km',
                  gravity: 'Microgravity (3-6 min)',
                  capacity: '4-6',
                  volume: '~45 m³',
                  duration: '~15 Minutes',
                  status: 'Active Flights',
                  statusColor: 'text-cyan-400'
                },
                {
                  title: 'ORBITAL HABITAT',
                  subtitle: 'LOW EARTH ORBIT',
                  badge: '03',
                  image: '/assets/space/img1.png',
                  altitude: '~400 km',
                  orbit: 'Yes',
                  gravity: 'Microgravity',
                  capacity: '8-12',
                  volume: '300-500 m³',
                  duration: '7-14 days',
                  status: 'Private Mission',
                  statusColor: 'text-blue-400'
                },
                {
                  title: 'LUNAR GATEWAY',
                  subtitle: 'CISLUNAR ORBIT',
                  badge: '04',
                  image: '/assets/space/img2.png',
                  altitude: '~384,000 km',
                  orbit: 'Yes',
                  gravity: 'Microgravity',
                  capacity: '4-6',
                  volume: '125 m³',
                  duration: '30-90 days',
                  status: 'Development',
                  statusColor: 'text-amber-400'
                },
                {
                  title: 'LUNAR SURFACE BASE',
                  subtitle: 'MOON LANDING',
                  badge: '05',
                  image: '/assets/space/img3.png',
                  altitude: '0 km (Lunar)',
                  orbit: 'No',
                  gravity: '0.16g',
                  capacity: '4-12',
                  volume: '~200-400 m³',
                  duration: '7-30 days',
                  status: 'Planning',
                  statusColor: 'text-orange-400'
                },
                {
                  title: 'MARS TOURISM HUB',
                  subtitle: 'DEEP SPACE DESTINATION',
                  badge: '06',
                  image: '/assets/space/img4.png',
                  altitude: '~225M km',
                  orbit: 'Yes',
                  gravity: '0.38g',
                  capacity: '12-50',
                  volume: '1000+ m³',
                  duration: '500+ days',
                  status: 'Conceptual',
                  statusColor: 'text-red-400'
                }
              ].map((item) => (
                <div
                  key={item.badge}
                  className="group relative bg-slate-900/50 backdrop-blur border border-cyan-500/20 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                    />
                  </div>

                  <div className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-xl font-bold mb-1">{item.title}</h3>
                        <p className="text-sm text-cyan-400 font-medium">{item.subtitle}</p>
                      </div>
                      <div className="w-12 h-12 rounded-full border-2 border-cyan-500 flex items-center justify-center text-cyan-400 font-bold">
                        {item.badge}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Altitude</p>
                        <p className="font-medium">{item.altitude}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Orbit</p>
                        <p className="font-medium">{item.orbit}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Gravity</p>
                        <p className="font-medium">{item.gravity}</p>
                      </div>
                      <div>
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Capacity</p>
                        <p className="font-medium">{item.capacity}</p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-gray-500 text-xs uppercase tracking-wider mb-1">Habitable Vol</p>
                        <p className="font-medium">{item.volume}</p>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-gray-800 flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Duration: <span className="text-white">{item.duration}</span></span>
                      <span className={`text-sm font-medium ${item.statusColor}`}>{item.status}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-6 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent">
          <div className="max-w-6xl mx-auto text-center space-y-12">
            <div>
              <h2 className="text-5xl font-bold mb-6">
                <span className="text-cyan-400">BUILT</span> FOR THE FUTURE OF HUMAN SPACEFLIGHT
              </h2>
              <p className="text-xl text-gray-400">
                Engineering excellence meets human-first design philosophy
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Rocket,
                  title: 'ORBIT-READY SYSTEMS',
                  description: 'Flight-proven architectures designed for long-term scalability.'
                },
                {
                  icon: Users,
                  title: 'HUMAN-CENTERED DESIGN',
                  description: 'Habitable volumes engineered for comfort, safety, and adaptability.'
                },
                {
                  icon: Layers,
                  title: 'PHASED DEPLOYMENT',
                  description: 'Each milestone builds safely toward permanent space living.'
                }
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="group p-8 bg-slate-900/30 backdrop-blur border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-cyan-500/10 border border-cyan-500/50 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                    <feature.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-32 px-6">
          <div className="max-w-5xl mx-auto text-center space-y-10">
            <h2 className="text-6xl md:text-7xl font-bold leading-tight">
              THE JOURNEY BEYOND
              <br />
              <span className="text-cyan-400">EARTH HAS BEGUN</span>
            </h2>

            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              Be part of the next era of exploration, habitation, and discovery.
            </p>

            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <button
                onClick={() => setShowModal(true)}
                className="group flex items-center gap-2 px-8 py-4 bg-cyan-500/10 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all duration-300"
              >
                <Rocket className="w-5 h-5" />
                <span className="font-medium">Register Interest</span>
              </button>
              <button className="group flex items-center gap-2 px-8 py-4 bg-cyan-500/10 border border-cyan-500 rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                <Download className="w-5 h-5" />
                <span className="font-medium">Download Roadmap</span>
              </button>
            </div>
          </div>
        </section>

        <footer className="py-12 px-6 border-t border-slate-800">
          <div className="max-w-6xl mx-auto text-center text-gray-500 text-sm">
            <p>&copy; 2026 Space Tourism Initiative. All rights reserved.</p>
          </div>
        </footer>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center p-6 overflow-y-auto pt-8">
          <div className="relative bg-gradient-to-br from-slate-900 to-slate-950 border border-cyan-500/30 rounded-2xl max-w-2xl w-full p-8 my-16">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-4xl font-bold text-cyan-400">REGISTER YOUR INTEREST</h3>
                <p className="text-gray-400">Join the next generation of space explores</p>
              </div>

              <form className="space-y-5">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name*</label>
                    <input
                      type="text"
                      placeholder="John"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name*</label>
                    <input
                      type="text"
                      placeholder="Doe"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Email Address*</label>
                  <input
                    type="email"
                    placeholder="Johndoe@gmail.com"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Phone Number*</label>
                  <input
                    type="tel"
                    placeholder="+951 673899239"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Country*</label>
                  <select className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors appearance-none">
                    <option>Select your country</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                  </select>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="col-span-1">
                    <label className="block text-sm font-medium mb-2">City*</label>
                    <input
                      type="text"
                      placeholder="New York"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium mb-2">State/Provide*</label>
                    <input
                      type="text"
                      placeholder="NY"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                  <div className="col-span-1">
                    <label className="block text-sm font-medium mb-2">Zip/Postal Code*</label>
                    <input
                      type="text"
                      placeholder="100001"
                      className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Date of Birth*</label>
                  <input
                    type="date"
                    placeholder="Pick a date"
                    className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">How did you hear about us?</label>
                  <select className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors appearance-none">
                    <option>Select an option</option>
                    <option>Social Media</option>
                    <option>News Article</option>
                    <option>Friend/Family</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Tell us a little about yourself</label>
                  <textarea
                    rows={4}
                    placeholder="Share your interest in space tourism..."
                    className="w-full px-4 py-3 bg-slate-950/50 border border-cyan-500/30 rounded-lg focus:border-cyan-500 focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-lg transition-colors duration-300"
                >
                  Submit Registration
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ExploreSpace;
