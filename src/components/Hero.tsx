import { Backpack, Coffee, Palette, BookOpen, Pen, Sparkles, Star, Laptop } from "lucide-react";

const Hero = () => {
  const stickers = [
    { Icon: Backpack, delay: "0s", position: "top-20 left-10" },
    { Icon: Coffee, delay: "0.5s", position: "top-40 right-20" },
    { Icon: Palette, delay: "1s", position: "bottom-32 left-20" },
    { Icon: BookOpen, delay: "1.5s", position: "top-60 left-1/4" },
    { Icon: Pen, delay: "2s", position: "bottom-40 right-32" },
    { Icon: Sparkles, delay: "2.5s", position: "top-32 right-40" },
    { Icon: Star, delay: "3s", position: "bottom-20 left-1/3" },
    { Icon: Laptop, delay: "3.5s", position: "top-1/2 right-20" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Animated curved text */}
      <div className="absolute top-32 left-0 w-full overflow-hidden">
        <div className="animate-move-text whitespace-nowrap text-muted-foreground text-sm font-light tracking-wider">
          UI/UX Designer · Creative Problem Solver · Design Enthusiast · Turning Ideas into Experiences ·
        </div>
      </div>

      {/* Floating stickers */}
      {stickers.map((sticker, index) => (
        <div
          key={index}
          className={`absolute ${sticker.position} hidden lg:block`}
          style={{
            animationDelay: sticker.delay,
          }}
        >
          <div className="animate-float-slow hover:scale-110 transition-transform cursor-pointer">
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-4 shadow-lg border-2 border-foreground/10">
              <sticker.Icon className="w-8 h-8 text-foreground/70" />
            </div>
          </div>
        </div>
      ))}

      {/* Central content */}
      <div className="text-center z-10 px-6">
        <div className="mb-8 animate-fade-in-up">
          <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-highlight-yellow via-highlight-pink to-highlight-blue p-1">
            <div className="w-full h-full rounded-full bg-white flex items-center justify-center">
              <span className="text-5xl">👩‍💻</span>
            </div>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          Hi, I'm <span className="highlight-yellow">Priya Upadhyay</span>
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          UI/UX Designer crafting beautiful digital experiences
        </p>

        <div className="flex flex-wrap gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.6s" }}>
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform"
          >
            View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="px-8 py-3 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-all"
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
