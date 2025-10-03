import { ExternalLink } from "lucide-react";
import startupIdeasImage from "@/assets/startup-ideas-ai.png";

const Projects = () => {
  const projects = [
    {
      title: "Startup Ideas AI",
      description: "Generate personalized startup ideas, validate them, and create AI-driven custom roadmaps.",
      link: "https://startupideasai.info",
      color: "bg-highlight-yellow",
      image: startupIdeasImage,
    },
    {
      title: "Modern Bakery Website",
      description: "Designed a modern, minimal bakery website using Framer with elegant animations.",
      link: "https://flowing-dance-749413.framer.app/",
      color: "bg-highlight-pink",
    },
    {
      title: "Movie App Prototype",
      description: "A streaming app prototype with clean UI and intuitive user flow.",
      link: "https://www.figma.com/proto/JGjsIQxI8Nqcx3iljFNWhD/Movie-App-Prototype--Community-?node-id=117-341",
      color: "bg-highlight-blue",
    },
    {
      title: "WiseTech Advisor Blog",
      description: "A live blog created using WordPress to showcase tech and gadget articles.",
      link: "https://wisetechadvisor.com/",
      color: "bg-highlight-green",
    },
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="highlight-yellow">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12">A selection of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <a
              key={index}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-3xl p-8 shadow-lg border border-foreground/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
            >
              <div className={`${project.color} w-full h-48 rounded-2xl mb-6 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden`}>
                {project.image ? (
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                ) : (
                  <span className="text-6xl">🎨</span>
                )}
              </div>

              <h3 className="text-2xl font-bold mb-3 group-hover:text-foreground/80 transition-colors">
                {project.title}
              </h3>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all">
                View Project
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
