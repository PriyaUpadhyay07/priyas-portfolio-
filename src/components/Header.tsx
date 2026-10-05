import { useState, useEffect } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

const projectLinks = [
  { label: "UI/UX Design Projects", id: "ui-ux-design-projects" },
  { label: "Vibe-Coded & AI Projects", id: "vibe-coded-ai-projects" },
  { label: "Web & Motion Design Projects", id: "web-animation-projects" },
];

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

  const navItems = ["Home", "Skills", "Projects", "Case Studies", "About", "Contact"];
  const getSectionId = (item: string) => item === "Case Studies" ? "case-studies" : item.toLowerCase();
  const navColors: { [key: string]: string } = {
    Home: "bg-[#FFF9C4]",
    Skills: "bg-[#E3F2FD]",
    Projects: "bg-[#E8F5E9]",
    "Case Studies": "bg-[#FFF3E0]",
    About: "bg-[#FFE0E9]",
    Contact: "bg-[#F3E5F5]",
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "backdrop-blur-xl bg-white/80 shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-4 sm:px-6 py-3 sm:py-5">
        <div className="flex items-center justify-between">
          {/* Left: Name with fancy font */}
          <button
            onClick={() => scrollToSection("home")}
            className="text-xl sm:text-3xl md:text-4xl text-foreground hover:opacity-80 transition-opacity"
            style={{ fontFamily: "'Pacifico', cursive" }}
          >
            Priya Upadhyay
          </button>

          {/* Center: Desktop Navigation - Rounded pill shape */}
          <div className="hidden md:flex items-center gap-0 bg-white/90 backdrop-blur-md rounded-full px-1 py-1.5 shadow-lg border-2 border-black/5">
            {navItems.map((item) => item === "Projects" ? (
              <div key={item} className="group/projects relative">
                <button
                  onClick={() => scrollToSection("projects")}
                  className="relative flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 lg:px-4"
                  aria-haspopup="true"
                >
                  <span className="relative z-10">Projects</span>
                  <ChevronDown className="relative z-10 h-4 w-4 transition-transform group-hover/projects:rotate-180" />
                  <span className={`absolute inset-0 ${navColors[item]} rounded-full scale-0 group-hover/projects:scale-100 transition-transform duration-300 border-2 border-transparent group-hover/projects:border-foreground`}></span>
                </button>
                <div className="invisible absolute left-1/2 top-full z-50 w-72 -translate-x-1/2 pt-3 opacity-0 transition-all duration-200 group-hover/projects:visible group-hover/projects:opacity-100 group-focus-within/projects:visible group-focus-within/projects:opacity-100">
                  <div className="rounded-lg border-2 border-foreground bg-background p-2 shadow-xl">
                    {projectLinks.map((link) => (
                      <button
                        key={link.id}
                        onClick={() => scrollToSection(link.id)}
                        className="block w-full rounded-md px-3 py-2.5 text-left text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:bg-secondary focus-visible:outline-none"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <button
                key={item}
                onClick={() => scrollToSection(getSectionId(item))}
                className="relative rounded-full px-3 py-2 text-sm font-medium text-foreground transition-all duration-300 group lg:px-4"
              >
                <span className="relative z-10">{item}</span>
                <span className={`absolute inset-0 ${navColors[item]} rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 border-2 border-transparent group-hover:border-foreground`}></span>
              </button>
            ))}
          </div>

          {/* Right: Resume Button */}
          <a
            href="/resume.pdf"
            download="Priya_Upadhyay_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex px-4 lg:px-6 py-2.5 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-all shadow-lg"
          >
            Resume
          </a>

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
              {navItems.map((item) => item === "Projects" ? (
                <div key={item} className="space-y-2">
                  <button onClick={() => scrollToSection("projects")} className="font-semibold text-foreground">Projects</button>
                  <div className="ml-3 flex flex-col gap-2 border-l-2 border-foreground/15 pl-3">
                    {projectLinks.map((link) => (
                      <button key={link.id} onClick={() => scrollToSection(link.id)} className="text-left text-sm text-muted-foreground transition-colors hover:text-foreground">
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <button key={item} onClick={() => scrollToSection(getSectionId(item))} className="text-foreground hover:text-primary font-medium transition-colors text-left">
                  {item}
                </button>
              ))}
              <a
                href="/resume.pdf"
                download="Priya_Upadhyay_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary font-medium transition-colors text-left"
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
