import { Linkedin, Twitter, Heart } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="glass border-t border-foreground/10 py-8 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Quick Links */}
          <div className="flex flex-wrap gap-6 justify-center md:justify-start">
            {["About", "Skills", "Projects", "Contact"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-foreground/70 hover:text-foreground transition-colors font-medium"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Copyright */}
          <div className="flex items-center gap-2 text-foreground/70">
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
              className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://x.com/Priya_Upadhyay_"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-foreground hover:text-background transition-all hover:scale-110"
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
