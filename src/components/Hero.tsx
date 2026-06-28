const Hero = () => {
  const expertise = ["UI Design", "UX Research", "Prototyping", "Mobile App Design", "Responsive Design"];
  const industries = ["SaaS", "AI Products", "Beauty Brands", "Startups", "Real Estate"];

  const tagColors = [
    "bg-highlight-yellow",
    "bg-highlight-pink",
    "bg-highlight-blue",
    "bg-highlight-green",
    "bg-highlight-purple",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-28 sm:pt-32 pb-16 px-4 sm:px-6"
      style={{
        backgroundImage: `
          linear-gradient(to right, hsl(var(--border) / 0.7) 2px, transparent 2px),
          linear-gradient(to bottom, hsl(var(--border) / 0.7) 2px, transparent 2px)
        `,
        backgroundSize: "100px 100px",
        animation: "moveGrid 20s linear infinite",
      }}
    >
      <div className="container mx-auto max-w-5xl relative z-10">
        {/* Main heading - centered */}
        <h1
          className="text-center text-3xl sm:text-5xl md:text-7xl font-bold mb-12 sm:mb-20 animate-fade-in-up"
          style={{ fontFamily: "'Syne', 'Clash Display', sans-serif" }}
        >
          I'm{" "}
          <span className="relative inline-block">
            <span className="relative z-10">UI/UX Designer</span>
            <span
              className="absolute inset-0 bg-highlight-yellow/80 -rotate-1 -z-10 scale-105"
              style={{ clipPath: "polygon(0 40%, 100% 50%, 100% 90%, 0 85%)" }}
            ></span>
          </span>
        </h1>

        {/* How I can help - left aligned */}
        <div className="max-w-3xl animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-6 sm:mb-8">
            How I can <span className="highlight-pink">help</span>
          </h2>

          {/* Expertise row */}
          <div className="mb-5 sm:mb-6">
            <p className="text-sm sm:text-base font-bold mb-3 text-foreground">Expertise:</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {expertise.map((item, idx) => (
                <span
                  key={item}
                  className={`${tagColors[idx % tagColors.length]} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border-2 border-black/10 hover:scale-105 hover:-translate-y-0.5 transition-all cursor-default shadow-sm`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Industries row */}
          <div className="mb-8 sm:mb-10">
            <p className="text-sm sm:text-base font-bold mb-3 text-foreground">Preferred Industries:</p>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {industries.map((item, idx) => (
                <span
                  key={item}
                  className={`${tagColors[(idx + 2) % tagColors.length]} px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium border-2 border-black/10 hover:scale-105 hover:-translate-y-0.5 transition-all cursor-default shadow-sm`}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-3 sm:gap-4">
            <button
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 sm:px-8 py-2.5 sm:py-3 bg-foreground text-background rounded-full font-semibold hover:scale-105 transition-transform shadow-lg text-sm sm:text-base"
            >
              View Projects
            </button>
            <button
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="px-5 sm:px-8 py-2.5 sm:py-3 border-2 border-foreground text-foreground rounded-full font-semibold hover:bg-foreground hover:text-background transition-all shadow-lg text-sm sm:text-base"
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
