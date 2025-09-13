import React, { useState, useEffect } from "react";
import { Menu, X, TrendingUp } from "lucide-react";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  // Dynamic classes for when header transitions from transparent (over purple hero) to white background
  const linkClass = `transition-colors font-medium ${
    isScrolled
      ? "text-gray-900 hover:text-purple-600"
      : "text-white hover:text-purple-200"
  }`;
  const mobileToggleClass = `lg:hidden p-2 rounded-md transition-colors ${
    isScrolled
      ? "text-gray-700 hover:text-purple-600"
      : "text-white hover:text-purple-200"
  }`;

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center space-x-3">
            <img
              src="/onboarding(coin).avif"
              alt="OnboardCoin Logo"
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full"
            />
            <div className="flex items-center space-x-2">
              <a
                href="https://fontmeme.com/twitch-logo-font/"
                aria-label="OnboardCoin"
                className="block focus:outline-none"
              >
                <img
                  src="https://fontmeme.com/permalink/250914/8b492fda54b87a6d06fce6794c8e2283.png"
                  alt="OnboardCoin"
                  className={`h-6 lg:h-8 w-auto object-contain pointer-events-none select-none transition-all duration-300 filter ${
                    isScrolled ? "" : "brightness-0 invert"
                  }`}
                  draggable="false"
                />
              </a>
              <TrendingUp className="w-5 h-5 text-purple-600" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("mission")}
              className={linkClass}
            >
              Mission
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className={linkClass}
            >
              How It Works
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className={linkClass}
            >
              Community
            </button>
            <button
              onClick={() => scrollToSection("faq")}
              className={linkClass}
            >
              FAQ
            </button>
            <button
              onClick={() => scrollToSection("apply")}
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-2 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg hover:shadow-purple-600"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={mobileToggleClass}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md shadow-lg border-t">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection("mission")}
                className="block w-full text-left text-gray-700 hover:text-purple-600 py-2 transition-colors font-medium"
              >
                Mission
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left text-gray-700 hover:text-purple-600 py-2 transition-colors font-medium"
              >
                How It Works
              </button>
              <button
                onClick={() => scrollToSection("community")}
                className="block w-full text-left text-gray-700 hover:text-purple-600 py-2 transition-colors font-medium"
              >
                Community
              </button>
              <button
                onClick={() => scrollToSection("faq")}
                className="block w-full text-left text-gray-700 hover:text-purple-600 py-2 transition-colors font-medium"
              >
                FAQ
              </button>
              <button
                onClick={() => scrollToSection("apply")}
                className="w-full bg-gradient-to-r from-purple-600 to-purple-700 text-white py-3 rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-200 shadow-lg font-medium"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
