import { ExternalLink } from "lucide-react";
import BuiltWith from "./BuiltWith";
import startupIdeasImage from "@/assets/startup-ideas-ai.png";
import bakeryImage from "@/assets/bakery-website.png";
import movieAppImage from "@/assets/movie-app.png";
import rareBeautyImage from "@/assets/rare-beauty-website.png";
import brandForgeImage from "@/assets/project-previews/brandforge.jpg.asset.json";
import ideaValidatorImage from "@/assets/project-previews/idea-validator.jpg.asset.json";
import roninImage from "@/assets/project-previews/ronin-x.jpg.asset.json";

interface Project {
  title: string;
  description: string;
  link: string;
  color: string;
  image: string;
  builtWith: string[];
}

const Projects = () => {
  const projectGroups: { title: string; accent: string; projects: Project[] }[] = [
    {
      title: "UI/UX Design Projects",
      accent: "highlight-blue",
      projects: [
        {
          title: "Movie App Prototype",
          description: "A streaming app prototype with a clean interface and intuitive user flow.",
          link: "https://www.figma.com/proto/JGjsIQxI8Nqcx3iljFNWhD/Movie-App-Prototype--Community-?node-id=117-341",
          color: "bg-highlight-blue",
          image: movieAppImage,
          builtWith: ["Figma"],
        },
      ],
    },
    {
      title: "Vibe-Coded AI Products",
      accent: "highlight-yellow",
      projects: [
        {
          title: "Startup Ideas AI",
          description: "Generate personalized startup ideas, validate them, and create AI-driven roadmaps.",
          link: "https://startupideasai.info",
          color: "bg-highlight-yellow",
          image: startupIdeasImage,
          builtWith: ["Lovable", "Supabase"],
        },
        {
          title: "BrandForge",
          description: "An AI-assisted workspace that turns a point of view into a focused visual identity.",
          link: "https://brandforge-drab.vercel.app/",
          color: "bg-highlight-green",
          image: brandForgeImage.url,
          builtWith: ["Replit", "Vercel", "Claude"],
        },
        {
          title: "Idea Validator",
          description: "A guided AI product that checks an idea and creates a practical validation plan.",
          link: "https://idea-validator-check.netlify.app/",
          color: "bg-highlight-purple",
          image: ideaValidatorImage.url,
          builtWith: ["GPT", "Netlify"],
        },
      ],
    },
    {
      title: "Website Design Projects",
      accent: "highlight-pink",
      projects: [
        {
          title: "Modern Bakery Website",
          description: "A modern, minimal bakery website with elegant motion and a warm visual style.",
          link: "https://flowing-dance-749413.framer.app/",
          color: "bg-highlight-pink",
          image: bakeryImage,
          builtWith: ["Framer"],
        },
        {
          title: "Rare Beauty E-Commerce",
          description: "A beauty e-commerce experience with elegant product showcases and smooth animations.",
          link: "https://teal-treacle-66ee62.netlify.app/",
          color: "bg-highlight-purple",
          image: rareBeautyImage,
          builtWith: ["Google Antigravity", "Netlify"],
        },
        {
          title: "RONIN_X",
          description: "An immersive gaming website concept with bold art direction and dynamic storytelling.",
          link: "https://gaming-site-web-design.netlify.app/",
          color: "bg-highlight-orange",
          image: roninImage.url,
          builtWith: ["Replit", "Claude", "Netlify"],
        },
      ],
    },
  ];

  const renderCard = (project: Project) => (
    <a
      key={project.title}
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="group bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-lg border border-foreground/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
    >
      <div className={`${project.color} w-full aspect-[16/9] rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center overflow-hidden`}>
        <img src={project.image} alt={`${project.title} preview`} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
      </div>
      <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-foreground/80 transition-colors">
        {project.title}
      </h3>
      <BuiltWith tools={project.builtWith} />
      <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-base">
        {project.description}
      </p>
      <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all text-sm sm:text-base">
        View Project
        <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
      </div>
    </a>
  );

  return (
    <>
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
          Featured <span className="highlight-yellow">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">A selection of my recent work</p>

        <div className="space-y-12 sm:space-y-16">
          {projectGroups.map((group) => (
            <div key={group.title}>
              <div className="flex items-center gap-4 mb-5 sm:mb-8">
                <h3 className={`text-xl sm:text-3xl font-bold shrink-0 ${group.accent}`}>{group.title}</h3>
                <div className="h-px bg-border grow" aria-hidden="true" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
                {group.projects.map(renderCard)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default Projects;
