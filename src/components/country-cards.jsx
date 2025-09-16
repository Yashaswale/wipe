const destinations = [
    {
      country: "UNITED KINGDOM",
      stats: "75+ official cities",
      image: "src/assets/countries/UK.png",
      alt: "Big Ben and London skyline",
    },
    {
      country: "EGYPT",
      stats: "200+ official cities",
      image: "src/assets/countries/Egypt.png",
      alt: "Cairo city skyline",
    },
    {
      country: "BRAZIL",
      stats: "5,500+ municipalities",
      image: "src/assets/countries/Brazil.png",
      alt: "Christ the Redeemer statue in Rio de Janeiro",
    },
    {
      country: "SINGAPORE",
      stats: "75 official cities",
      image: "src/assets/countries/Singapore.png",
      alt: "Singapore Merlion statue",
    },
    {
      country: "USA",
      stats: "19,000 incorporated cities, towns, and villages",
      image: "src/assets/countries/USA.png",
      alt: "Statue of Liberty in New York",
    },
    {
      country: "RUSSIA",
      stats: "1,100+ cities and towns",
      image: "src/assets/countries/Russia.png",
      alt: "St. Basil's Cathedral in Moscow",
    },
    {
      country: "MEXICO",
      stats: "2,500+ municipalities",
      image: "src/assets/countries/Mexico.png",
      alt: "Mexican palace architecture",
    },
    {
      country: "GERMANY",
      stats: "2000+ official cities",
      image: "src/assets/countries/Germany.png",
      alt: "Historic German architecture",
    },
    {
      country: "SPAIN",
      stats: "8,132 municipalities",
      image: "src/assets/countries/Spain.png",
      alt: "Barcelona architectural towers",
    },
    {
      country: "JAPAN",
      stats: "800+ officially designated cities",
      image: "src/assets/countries/Japan.png",
      alt: "Japanese castle with cherry blossoms",
    },
  ]
  
  export function CountryCards() {
    return (
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {destinations.map((destination, index) => {
            // Apply custom grid spans for Brazil & Singapore
            let colSpan = ""
            if (index === 2) colSpan = "lg:col-span-2" // Brazil wide on row 1
            if (index === 3) colSpan = "lg:col-span-2" // Singapore wide on row 2
  
            const isJapan = index === destinations.length - 1
  
            if (isJapan) {
              return (
                <div
                  key={destination.country}
                  className={`relative h-64 rounded-2xl overflow-hidden ${colSpan}`}
                >
                  <div className="flip-container h-full w-full">
                    <div className="flip-inner rounded-2xl">
                      {/* Front Face */}
                      <div className="flip-face rounded-2xl">
                        <img
                          src={destination.image || "/placeholder.svg"}
                          alt={destination.alt}
                          className="absolute inset-0 w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-6">
                          <h3 className="text-white font-bold text-xl mb-2 text-balance">
                            {destination.country}
                          </h3>
                          <p className="text-white/90 text-sm font-medium">
                            {destination.stats}
                          </p>
                        </div>
                      </div>
                      {/* Back Face */}
                      <div className="flip-face flip-back rounded-2xl bg-[#C7EDDB] flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="text-4xl font-bold text-green-400 mb-2">180+</div>
                          <div className="text-white text-lg font-semibold">Countries</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
  
            return (
              <div
                key={destination.country}
                className={`relative h-64 rounded-2xl overflow-hidden group cursor-pointer transition-transform duration-300 hover:scale-105 ${colSpan}`}
              >
                <img
                  src={destination.image || "/placeholder.svg"}
                  alt={destination.alt}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-white font-bold text-xl mb-2 text-balance">
                    {destination.country}
                  </h3>
                  <p className="text-white/90 text-sm font-medium">
                    {destination.stats}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </section>
    )
  }
  