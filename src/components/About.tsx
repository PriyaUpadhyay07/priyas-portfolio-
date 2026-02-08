import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-8 sm:mb-12 text-center">
          About <span className="highlight-pink">Me</span>
        </h2>

        <div className="bg-white rounded-2xl sm:rounded-3xl shadow-lg p-5 sm:p-8 md:p-12 border border-foreground/10">
          <p className="text-sm sm:text-lg md:text-xl text-foreground/80 mb-4 sm:mb-6 leading-relaxed">
            Hi! I'm Priya Upadhyay, a UI/UX Designer passionate about creating{" "}
            <span className="highlight-blue font-semibold">intuitive</span> and{" "}
            <span className="highlight-yellow font-semibold">beautiful</span> digital experiences.
          </p>

          <p className="text-sm sm:text-lg md:text-xl text-foreground/80 mb-6 sm:mb-8 leading-relaxed">
            I love turning complex problems into{" "}
            <span className="highlight-green font-semibold">simple, elegant solutions</span> through thoughtful design.
          </p>

          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="bg-highlight-yellow rounded-full p-2 sm:p-3 mt-1">
                <GraduationCap className="w-4 h-4 sm:w-6 sm:h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-base sm:text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-2 sm:space-y-3">
                  <div>
                    <p className="font-medium text-sm sm:text-base">B.Tech in Computer Science</p>
                    <p className="text-muted-foreground text-xs sm:text-base">S.D. College of Engineering & Technology</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">2021 - 2025</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm sm:text-base">M.Tech (Currently Pursuing)</p>
                    <p className="text-muted-foreground text-xs sm:text-base">MIET</p>
                    <p className="text-xs sm:text-sm text-muted-foreground">2025 - 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-6 sm:mt-8 flex gap-2 justify-center">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-highlight-yellow animate-pulse"></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-highlight-pink animate-pulse" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-highlight-blue animate-pulse" style={{ animationDelay: "0.4s" }}></div>
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-highlight-green animate-pulse" style={{ animationDelay: "0.6s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
