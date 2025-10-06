import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navColors: { [key: string]: string } = {
    Home: "bg-[#FFF9C4]",
    About: "bg-[#FFE0E9]",
    Skills: "bg-[#E3F2FD]",
    Projects: "bg-[#E8F5E9]",
    Contact: "bg-[#F3E5F5]",
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? "bg-white/95 border-b-4 border-black" 
          : "bg-white/95 border-b-4 border-black"
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-2xl font-black text-foreground hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Space Grotesk', sans-serif" }}
          >
            crypko°
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "About", "Skills", "Projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground font-semibold text-sm uppercase tracking-wide hover:opacity-70 transition-opacity"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-white text-foreground border-3 border-black rounded-full font-bold text-sm uppercase hover:bg-foreground hover:text-white transition-all"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-foreground"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 bg-white border-3 border-black rounded-lg p-4">
            <div className="flex flex-col gap-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:opacity-70 font-semibold transition-opacity text-left uppercase text-sm"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
