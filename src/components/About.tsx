import { Backpack, Coffee, Pen, Star, Laptop } from "lucide-react";
import avatarImage from "@/assets/avatar-3d.png";

const About = () => {
  const stickers = [
    { Icon: Backpack, delay: "0s", position: "top-4 -left-2 sm:-left-4", color: "#FFB6C1" },
    { Icon: Coffee, delay: "0.5s", position: "top-8 -right-2 sm:-right-4", color: "#D2691E" },
    { Icon: Pen, delay: "1s", position: "bottom-16 -left-4 sm:-left-6", color: "#FFD700" },
    { Icon: Star, delay: "1.5s", position: "top-1/3 -right-4 sm:-right-6", color: "#FFF176" },
    { Icon: Laptop, delay: "2s", position: "bottom-8 -right-2 sm:-right-4", color: "#87CEEB" },
  ];

  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left: Avatar with floating stickers */}
          <div className="relative flex items-center justify-center order-2 md:order-1">
            <div className="relative w-full max-w-md">
              {/* Floating stickers */}
              {stickers.map((sticker, index) => (
                <div
                  key={index}
                  className={`absolute ${sticker.position} z-20`}
                  style={{ animationDelay: sticker.delay }}
                >
                  <div className="animate-float-slow hover:scale-110 hover:rotate-6 transition-all duration-300 cursor-pointer">
                    <div
                      className="backdrop-blur-sm rounded-2xl p-2.5 sm:p-3 shadow-xl border-2 border-black/20"
                      style={{ backgroundColor: sticker.color + "CC" }}
                    >
                      <sticker.Icon className="w-5 h-5 sm:w-7 sm:h-7 text-black" strokeWidth={2.5} />
                    </div>
                  </div>
                </div>
              ))}

              <div className="w-full aspect-square animate-float">
                <img
                  src={avatarImage}
                  alt="Priya Upadhyay 3D Avatar"
                  className="w-full h-full object-contain"
                  style={{ filter: "drop-shadow(0px 8px 16px rgba(0, 0, 0, 0.15))" }}
                />
              </div>
            </div>
          </div>

          {/* Right: About text */}
          <div className="order-1 md:order-2">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-6 sm:mb-8">
              About <span className="highlight-pink">Me</span>
            </h2>

            <p className="text-base sm:text-lg text-foreground/80 mb-5 leading-relaxed">
              I enjoy designing digital experiences that are simple to use, visually clean, and focused on solving real
              user problems. My goal is to create interfaces that not only look good but also help businesses achieve
              meaningful results.
            </p>

            <p className="text-base sm:text-lg text-foreground/80 leading-relaxed">
              I also enjoy using modern AI-powered design tools to explore ideas faster and deliver high-quality user
              experiences more efficiently.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
