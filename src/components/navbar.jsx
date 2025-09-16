import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const goToHomeSection = (hash) => (e) => {
    e.preventDefault();
    window.location.href = `/${hash}`; // e.g., '/#why-wipe'
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
        <a href="/flex" className="hover:text-green-600 transition-colors">
          Wipe Flex
        </a>
      </nav>

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
            href="/flex"
            className="hover:text-green-600 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Wipe Flex
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
