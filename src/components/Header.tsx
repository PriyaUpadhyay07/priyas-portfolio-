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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "backdrop-blur-xl bg-white/80 shadow-sm border-b border-black/10" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl font-bold text-foreground hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Syne', 'Clash Display', sans-serif" }}
          >
            Priya Upadhyay
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-2">
            {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative px-5 py-2 text-foreground font-medium transition-all duration-300 rounded-full group hover:${navColors[item]}`}
              >
                <span className="relative z-10">{item}</span>
                <span className={`absolute inset-0 ${navColors[item]} rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 border-2 border-transparent group-hover:border-black`}></span>
              </button>
            ))}
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
          <div className="md:hidden mt-4 glass rounded-lg p-4">
            <div className="flex flex-col gap-4">
              {["Home", "About", "Skills", "Projects", "Contact"].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-foreground hover:text-primary font-medium transition-colors text-left"
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
