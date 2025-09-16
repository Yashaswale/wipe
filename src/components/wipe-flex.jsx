import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import bgDesign from "/assets/bg_design.png";

export function WipeFlex() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <div className="px-4 py-10 lg:px-28 lg:mb-16" ref={ref}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6" >
        
        {/* Wipe Flex Card */}
        <div
          className="rounded-2xl relative overflow-hidden min-h-[250px] flex items-start justify-between"
          style={{
            background: "linear-gradient(91.38deg, #15B667 0%, #09502D 100%)",
          }}
        >
          {/* Decorative BG between gradient and car */}
          <div
            className="absolute inset-0 z-0 pointer-events-none"
            style={{ backgroundImage: `url(${bgDesign})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundPosition: 'center' }}
          />

          {/* Car Image - extreme left & slightly out of card */}
          <img
            src="/assets/BMW.png"
            alt="Green BMW car"
            className="absolute left-0 -bottom-6 w-full max-w-xs sm:max-w-sm lg:max-w-sm object-contain transform -translate-x-6 z-20"
          />

          {/* Title on top-right */}
          <h3 className="relative z-10 text-white/80 text-3xl sm:text-4xl lg:text-5xl font-bold p-4 text-right ml-auto">
            Wipe Flex
          </h3>

          {/* Background decorative circles */}

        </div>

        {/* Top-Rated Cars Card */}
        <div
          className="rounded-2xl p-8 relative overflow-hidden min-h-[250px]"
          style={{
            background: "linear-gradient(91.38deg, #15B667 0%, #09502D 100%)",
          }}
        >
          <div className="relative z-10 h-full flex flex-col justify-between items-end text-right">
            <div>
              <h3 className="text-white/80 text-lg font-medium mb-2">
                Top-Rated Cars
              </h3>
              <h2 className="text-white text-4xl lg:text-5xl font-bold mb-2">
                {inView && (
                  <CountUp start={0} end={21000} duration={3} separator="," />
                )}
                +
              </h2>
              <p className="text-green-100 text-sm mb-6">
                Available across UAE from Trusted Rental Partners
              </p>
            </div>
            <button className="bg-green-500 hover:bg-green-400 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 self-end">
              Explore Wipe Flex
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
