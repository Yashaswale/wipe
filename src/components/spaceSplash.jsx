import { useEffect, useState } from 'react';

export default function SpaceSplash({ duration = 8000, onFinish }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => {
      setVisible(false);
      if (onFinish) onFinish();
    }, duration);

    return () => clearTimeout(t);
  }, [duration, onFinish]);

  return (
    <div className={`fixed inset-0 z-[60] flex items-center justify-center transition-opacity duration-700 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      <img src="/assets/space/space3.png" alt="Orbit Nine" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/30" />

      <div className="relative z-10 text-center px-6">
        <h1
          className="text-white font-semibold"
          style={{
            letterSpacing: '0.6em',
            fontFamily: 'Codec Cold Trial, sans-serif',
            fontSize: 'clamp(28px, 6vw, 96px)'
          }}
        >
          ORBIT NINE
        </h1>

        <p className="text-white/90 mt-4 text-sm sm:text-base">Powered by <span className="font-semibold">Wipe</span></p>

        <p className="text-white/70 mt-3 text-xs sm:text-sm italic">One Unified Mobility Ecosystem connecting Earth to Orbit.</p>
      </div>
    </div>
  );
}
