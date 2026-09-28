import { ExternalLink } from "lucide-react";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Runway UX Case Study",
      subtitle: "Simplifying the Creative Workspace",
      description:
        "A complete UX audit and redesign of Runway AI — reducing clutter and cognitive load in creative workspaces through research, problem framing, and iterative solutions.",
      link: "https://case-study-1-drab.vercel.app/",
      color: "bg-highlight-blue",
      emoji: "✍️",
    },
  ];

  return (
    <section id="case-studies" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
          Case <span className="highlight-pink">Studies</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">
          Deep dives into my design process, from problem to solution
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {caseStudies.map((study, index) => (
            <a
              key={index}
              href={study.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg border border-foreground/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
            >
              <div className={`${study.color} w-full h-32 sm:h-48 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden`}>
                <span className="text-4xl sm:text-6xl">{study.emoji}</span>
              </div>
              <h3 className="text-lg sm:text-2xl font-bold mb-1 sm:mb-2 group-hover:text-foreground/80 transition-colors">
                {study.title}
              </h3>
              <p className="text-xs sm:text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2 sm:mb-3">
                {study.subtitle}
              </p>
              <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-base">
                {study.description}
              </p>
              <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all text-sm sm:text-base">
                Read Case Study
                <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
