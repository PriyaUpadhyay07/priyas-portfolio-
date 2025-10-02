import { Backpack, Coffee, Pen, Star, Laptop } from "lucide-react";
import avatarImage from "@/assets/avatar-3d.png";

const Hero = () => {
  // Main stickers around avatar - only 5 colorful ones
  const heroStickers = [
    { Icon: Backpack, delay: "0s", position: "top-24 left-16", color: "#FFB6C1" },
    { Icon: Coffee, delay: "0.5s", position: "top-20 right-24", color: "#D2691E" },
    { Icon: Pen, delay: "1s", position: "bottom-28 left-20", color: "#FFD700" },
    { Icon: Star, delay: "1.5s", position: "top-1/2 right-16", color: "#FFF176" },
    { Icon: Laptop, delay: "2s", position: "bottom-24 right-28", color: "#87CEEB" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated curved text - behind everything */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <path
            id="curvePath"
            d="M -200,540 Q 300,140 600,340 T 1400,240"
            fill="none"
            stroke="none"
          />
          <text className="curved-text-animation" fill="#1a1a1a" fontSize="32" fontWeight="900" letterSpacing="4">
            <textPath href="#curvePath" startOffset="0%">
              <animate attributeName="startOffset" from="-50%" to="150%" dur="20s" repeatCount="indefinite" />
              UI/UX Designer • Creative Problem Solver • Design Enthusiast • Turning Ideas into Experiences • 
            </textPath>
          </text>
        </svg>
      </div>

      {/* Floating hero stickers - colorful around avatar */}
      {heroStickers.map((sticker, index) => (
        <div
          key={index}
          className={`absolute ${sticker.position} hidden lg:block z-20`}
          style={{
            animationDelay: sticker.delay,
          }}
        >
          <div className="animate-float-slow hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
            <div className="backdrop-blur-sm rounded-2xl p-4 shadow-xl border-2 border-black/20" style={{ backgroundColor: sticker.color + "CC" }}>
              <sticker.Icon className="w-10 h-10 text-black" strokeWidth={2.5} />
            </div>
          </div>
        </div>
      ))}

      {/* Central content */}
      <div className="text-center z-10 px-6 relative">
        {/* 3D Avatar */}
        <div className="mb-10 animate-fade-in-up">
          <div className="w-[28rem] h-[28rem] md:w-[36rem] md:h-[36rem] mx-auto animate-float">
            <img 
              src={avatarImage} 
              alt="Priya Upadhyay 3D Avatar" 
              className="w-full h-full object-contain"
              style={{ 
                filter: 'drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15))'
              }}
            />
          </div>
        </div>

        {/* Name with stylish highlight */}
        <h1 className="text-4xl md:text-6xl font-medium mb-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Hi, I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10 text-5xl md:text-8xl font-black" style={{ fontFamily: "'Syne', 'Clash Display', sans-serif" }}>
              Priya Upadhyay
            </span>
            <span className="absolute inset-0 bg-highlight-yellow/80 -rotate-1 -z-10 scale-105" style={{ clipPath: "polygon(0 40%, 100% 50%, 100% 90%, 0 85%)" }}></span>
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-in-up font-medium" style={{ animationDelay: "0.4s" }}>
          UI/UX Designer crafting beautiful digital experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform shadow-lg"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-all shadow-lg"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-foreground/30 rounded-full animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
