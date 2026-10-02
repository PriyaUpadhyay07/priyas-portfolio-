import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import BuiltWith from "./BuiltWith";
import ProjectDetailDrawer, { type Project } from "./ProjectDetailDrawer";
import startupIdeasImage from "@/assets/startup-ideas-ai.png";
import bakeryImage from "@/assets/bakery-website.png";
import movieAppImage from "@/assets/movie-app.png";
import rareBeautyImage from "@/assets/rare-beauty-website.png";
import brandForgeImage from "@/assets/project-previews/brandforge.jpg";
import ideaValidatorImage from "@/assets/project-previews/idea-validator.jpg";
import roninImage from "@/assets/project-previews/ronin-x.jpg";
import rareBeautyVideo from "@/assets/project-media/rare-beauty-walkthrough.mp4.asset.json";
import bakeryVideo from "@/assets/project-media/bakery-walkthrough.mp4.asset.json";
import roninVideo from "@/assets/project-media/ronin-x-walkthrough.mp4.asset.json";
import casaBellaVideo from "@/assets/project-media/casa-bella-walkthrough.mp4.asset.json";
import casaBellaCover from "@/assets/project-media/casa-bella-cover.jpg.asset.json";
import brandForgeVideo from "@/assets/project-media/brandforge-walkthrough.mp4.asset.json";
import uiFashionVideo from "@/assets/project-media/ui-fashion-walkthrough.mp4.asset.json";
import uiFashionCover from "@/assets/project-media/ui-fashion-cover.jpg.asset.json";
import ideaValidatorOverview from "@/assets/project-media/idea-validator-overview.png.asset.json";
import ideaValidatorShowcase from "@/assets/project-media/idea-validator-showcase.png.asset.json";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

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
          about: [
            "A streaming app prototype focused on a clear interface, familiar browsing patterns, and an easy viewing flow.",
            "The design explores how users can discover titles and move through the experience without unnecessary steps.",
          ],
        },
        {
          title: "UI Design of Fashion",
          description: "Where fashion meets intelligent vision through a clean, modern one-page experience.",
          link: "https://www.figma.com/proto/6TFGWwZebzsLxvD4kBXNQC/Figr-demo-design?node-id=31-2&t=A7PlNA2WqqQ9ojkF-0&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
          color: "bg-highlight-pink",
          image: uiFashionCover.url,
          builtWith: ["Figma"],
          media: [{ type: "video", src: uiFashionVideo.url }],
          about: [
            "This is a one-page landing page inspired by Figr.so, created to practice clean layouts and easy navigation.",
            "Its navbar uses anchor links, helping users jump quickly between sections while keeping the design simple, modern, and readable.",
          ],
          extraTitle: "What Figr is for",
          extraDescription: "Figr is an AI agent for websites. It acts like a personal helper for every customer by talking with them, showing products, and helping them buy or book.",
          points: [
            "AI concierge that understands what each customer needs",
            "Live try-on for clothes in real time",
            "3D previews for placing furniture inside a room",
            "Live tours for homes and travel destinations",
            "Handles orders, tracking, exchanges, and bookings",
            "Passes the conversation to a human when needed",
          ],
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
          about: [
            "Startup Ideas AI helps people generate personalized startup ideas, validate opportunities, and build practical roadmaps.",
            "The product turns a broad interest into focused next steps with an easy, guided experience.",
          ],
        },
        {
          title: "BrandForge",
          description: "An AI-assisted workspace that turns a point of view into a focused visual identity.",
          link: "https://brandforge-drab.vercel.app/",
          color: "bg-highlight-green",
          image: brandForgeImage,
          builtWith: ["Replit", "Vercel", "Claude"],
          media: [{ type: "video", src: brandForgeVideo.url }],
          about: [
            "BrandForge is a SaaS workspace for setting brand colors and shaping a visual identity in just a few clicks.",
            "It lets founders preview how their branding will look before they commit to building it.",
          ],
        },
        {
          title: "Idea Validator",
          description: "A guided AI product that checks an idea and creates a practical validation plan.",
          link: "https://idea-validator-check.netlify.app/",
          color: "bg-highlight-purple",
          image: ideaValidatorImage,
          builtWith: ["GPT", "Netlify"],
          media: [
            { type: "image", src: ideaValidatorOverview.url, alt: "Idea Validator landing page" },
            { type: "image", src: ideaValidatorShowcase.url, alt: "Idea Validator product showcase" },
          ],
          about: [
            "Validate an idea by answering six simple questions. The product studies competitors and real-time data to reveal useful insights.",
            "It makes early research easier and gives founders clearer evidence before they start building.",
          ],
        },
        {
          title: "Casa Bella",
          description: "A hotel booking system that turns room inquiries into confirmed bookings automatically.",
          link: "https://casabellahotel.lovable.app",
          color: "bg-highlight-orange",
          image: casaBellaCover.url,
          builtWith: ["Lovable", "Claude"],
          media: [{ type: "video", src: casaBellaVideo.url }],
          about: [
            "Casa Bella is a 15-room boutique hotel in Florence, run by one owner and a small hospitality team.",
            "The booking system replaces manual WhatsApp and email follow-ups. Guests can check dates, choose a room, pay, get answers, and receive check-in details automatically.",
            "Cancellations and refunds are handled automatically, while a live dashboard keeps every booking and saved hour visible. Built for #lovablechallenge.",
          ],
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
          media: [{ type: "video", src: bakeryVideo.url }],
          about: [
            "This Framer website focuses on colorful motion and playful visuals.",
            "Its cute visual language follows the bakery theme and makes the experience feel warm, lively, and memorable.",
          ],
        },
        {
          title: "Rare Beauty E-Commerce",
          description: "A beauty e-commerce experience with elegant product showcases and smooth animations.",
          link: "https://teal-treacle-66ee62.netlify.app/",
          color: "bg-highlight-purple",
          image: rareBeautyImage,
          builtWith: ["Google Antigravity", "Netlify"],
          media: [{ type: "video", src: rareBeautyVideo.url }],
          about: [
            "A Rare Beauty product website concept created to showcase an animated hero section.",
            "The main purpose is to present motion design with a simple, creative beauty aesthetic.",
          ],
        },
        {
          title: "RONIN_X",
          description: "An immersive gaming website concept with bold art direction and dynamic storytelling.",
          link: "https://gaming-site-web-design.netlify.app/",
          color: "bg-highlight-orange",
          image: roninImage,
          builtWith: ["Replit", "Claude", "Netlify"],
          media: [{ type: "video", src: roninVideo.url }],
          about: [
            "RONIN_X uses bold red shades to create an intense gaming atmosphere.",
            "An action-focused anime heroine appears as the main character, giving the website a strong visual identity and story.",
          ],
        },
      ],
    },
  ];

  const renderCard = (project: Project) => (
    <article
      key={project.title}
      role="button"
      tabIndex={0}
      aria-label={`View ${project.title} details`}
      onClick={() => setSelectedProject(project)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          setSelectedProject(project);
        }
      }}
      className="group flex cursor-pointer flex-col bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-7 shadow-lg border border-foreground/10 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
      <Button asChild className="mt-auto w-full rounded-full">
        <a href={project.link} target="_blank" rel="noopener noreferrer" onClick={(event) => event.stopPropagation()}>
          View Project
          <ExternalLink />
        </a>
      </Button>
    </article>
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
    <ProjectDetailDrawer project={selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)} />
    </>
  );
};

export default Projects;
