import { Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-white border-t-4 border-black py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {["About", "Skills", "Projects"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground hover:opacity-70 transition-opacity font-semibold text-sm uppercase tracking-wide"
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => scrollToSection("contact")}
              className="px-4 py-1 bg-white text-foreground border-2 border-black rounded-full font-bold text-sm uppercase hover:bg-foreground hover:text-white transition-all"
            >
              Contact
            </button>
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-foreground font-medium text-sm">
            <span>© 2025 Priya Upadhyay</span>
            <span>·</span>
            <span className="flex items-center gap-1">
              Designed with <Heart className="w-4 h-4 fill-current text-red-500" />
            </span>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/priya-upadhyay68/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-foreground hover:text-white transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Priya_Upadhyay_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white border-2 border-black rounded-full flex items-center justify-center hover:bg-foreground hover:text-white transition-all hover:scale-110"
            >
              <Twitter className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
