import { GraduationCap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
          About <span className="highlight-pink">Me</span>
        </h2>

        <div className="bg-white rounded-3xl shadow-lg p-8 md:p-12 border border-foreground/10">
          <p className="text-lg md:text-xl text-foreground/80 mb-6 leading-relaxed">
            Hi! I'm Priya Upadhyay, a UI/UX Designer passionate about creating{" "}
            <span className="highlight-blue font-semibold">intuitive</span> and{" "}
            <span className="highlight-yellow font-semibold">beautiful</span> digital experiences.
          </p>

          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
            I love turning complex problems into{" "}
            <span className="highlight-green font-semibold">simple, elegant solutions</span> through thoughtful design.
          </p>

          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-highlight-yellow rounded-full p-3 mt-1">
                <GraduationCap className="w-6 h-6 text-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <div className="space-y-3">
                  <div>
                    <p className="font-medium">B.Tech in Computer Science</p>
                    <p className="text-muted-foreground">S.D. College of Engineering & Technology</p>
                    <p className="text-sm text-muted-foreground">2021 - 2025</p>
                  </div>
                  <div>
                    <p className="font-medium">M.Tech (Currently Pursuing)</p>
                    <p className="text-muted-foreground">MIET</p>
                    <p className="text-sm text-muted-foreground">2025 - 2027</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-8 flex gap-3 justify-center relative">
            <div className="w-3 h-3 rounded-full bg-highlight-yellow animate-bounce"></div>
            <div className="w-3 h-3 rounded-full bg-highlight-pink animate-bounce" style={{ animationDelay: "0.1s" }}></div>
            <div className="w-3 h-3 rounded-full bg-highlight-blue animate-bounce" style={{ animationDelay: "0.2s" }}></div>
            <div className="w-3 h-3 rounded-full bg-highlight-green animate-bounce" style={{ animationDelay: "0.3s" }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
