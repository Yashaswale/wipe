import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const goToHomeSection = (hash) => (e) => {
    e.preventDefault();
    window.location.href = `/#${hash}`; // e.g., '/#why-wipe'
  };

  const handleExploreSpace = () => {
    navigate('/explore-space');
    setIsOpen(false);
  };

  return (
    <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-gradient-to-r from-white to-green-50 relative shadow-sm">
      {/* Logo */}
      <a href="/" className="text-3xl font-bold text-green-600 font-[Codec Cold Trial,sans-serif]">
        Wipe
      </a>

      {/* Desktop Navigation (centered) */}
      <nav className="hidden md:flex flex-1 justify-center space-x-10 text-gray-900 font-medium font-[Codec Cold Trial,sans-serif]">
        <a href="/#why-wipe" onClick={goToHomeSection('#why-wipe')} className="hover:text-green-600 transition-colors">
          WhyWipe
        </a>
        <a href="/#travel-cards" onClick={goToHomeSection('#travel-cards')} className="hover:text-green-600 transition-colors">
          Services
        </a>
        <a href="/#country-cards" onClick={goToHomeSection('#country-cards')} className="hover:text-green-600 transition-colors">
          Wipe Ride
        </a>
        <a href="https://www.finalrentals.com/wipe/696bf23197c402c83605b03ffb549e41" className="hover:text-green-600 transition-colors">
          Wipe Flex
        </a>
        <button onClick={handleExploreSpace} className="hover:text-green-600 transition-colors tracking-widest">
          O R B I T&nbsp;&nbsp;N I N E
        </button>
      </nav>

      {/* Explore Space Button (Right Side) */}
      <button
        onClick={handleExploreSpace}
        className="hidden md:block px-8 py-4 text-white font-semibold rounded-full transition-all shadow-lg text-sm relative overflow-hidden"
        style={{
          fontFamily: "Codec Cold Trial, sans-serif",
          backgroundImage: ' url(/assets/space/space2.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        Explore Space
      </button>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-green-600 z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
      </button>

      {/* Mobile Dropdown with transition */}
      <div
        className={`absolute top-full left-0 w-full overflow-hidden transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-gradient-to-r from-white to-green-50 shadow-md`}
      >
        <nav className="flex flex-col items-center p-6 space-y-6 text-gray-900 font-medium font-[Codec Cold Trial,sans-serif]">
          <a
            href="/#why-wipe"
            className="hover:text-green-600 transition-colors"
            onClick={(e) => { goToHomeSection('#why-wipe')(e); setIsOpen(false); }}
          >
            WhyWipe
          </a>
          <a
            href="/#travel-cards"
            className="hover:text-green-600 transition-colors"
            onClick={(e) => { goToHomeSection('#travel-cards')(e); setIsOpen(false); }}
          >
            Services
          </a>
          <a
            href="/#country-cards"
            className="hover:text-green-600 transition-colors"
            onClick={(e) => { goToHomeSection('#country-cards')(e); setIsOpen(false); }}
          >
            Wipe Ride
          </a>
          <a
            href="https://www.finalrentals.com/wipe/696bf23197c402c83605b03ffb549e41"
            className="hover:text-green-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Wipe Flex
          </a>
          <button
            onClick={handleExploreSpace}
            className="hover:text-green-600 transition-colors tracking-widest"
          >
            O R B I T&nbsp;&nbsp;N I N E
          </button>
          <button
            onClick={handleExploreSpace}
            className="px-6 py-2 text-white font-semibold rounded-full transition-all shadow-lg text-sm relative overflow-hidden"
            style={{
              fontFamily: "Codec Cold Trial, sans-serif",
              backgroundImage: ' url(/assets/space/space2.jpg)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            Explore Space
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
