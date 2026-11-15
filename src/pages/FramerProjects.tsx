import { useEffect, useRef, useState, type ReactNode } from "react";
import { ArrowUpRight, Image as ImageIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import homeFrontPreview from "@/assets/home-front-preview.jpg";

type FramerProjectEntry = {
  title: string;
  description: string;
  link?: string;
  image?: string;
};

const framerProjects: FramerProjectEntry[] = [
  {
    title: "Home Front",
    description:
      "A Sydney design-and-construction studio showcasing high-end residential work and an integrated process from first sketch through handover.",
    link: "https://homefront07.framer.website/",
    image: homeFrontPreview,
  },
  {
    title: "Upcoming Project",
    description: "Project details will be added when shared.",
  },
  {
    title: "Upcoming Project",
    description: "Project details will be added when shared.",
  },
];

const Reveal = ({ children, delay = 0 }: { children: ReactNode; delay?: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12 },
    );
    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-[opacity,transform] duration-700 ease-out motion-reduce:transition-none ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const FramerProjectCard = ({ project, index }: { project: FramerProjectEntry; index: number }) => (
  <Reveal delay={index * 100}>
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-foreground bg-card shadow-lg transition-transform duration-300 hover:-translate-y-1 sm:rounded-3xl">
      <div className="relative aspect-[16/9] overflow-hidden border-b-2 border-foreground bg-secondary">
        {project.image ? (
          <img
            src={project.image}
            alt={`${project.title} website preview`}
            className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03]"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-3 border-dashed text-muted-foreground">
            <ImageIcon className="h-8 w-8" aria-hidden="true" />
            <span className="text-sm font-medium">Thumbnail reserved</span>
          </div>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <span className="mb-3 text-xs font-bold uppercase text-muted-foreground">
          Framer Website · {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="mb-3 text-xl font-bold sm:text-2xl">{project.title}</h2>
        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground sm:text-base">
          {project.description}
        </p>
        {project.link ? (
          <Button asChild className="w-full rounded-full">
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Live Website
              <ArrowUpRight aria-hidden="true" />
            </a>
          </Button>
        ) : (
          <Button type="button" className="w-full rounded-full" disabled>
            Live website link to be added
          </Button>
        )}
      </div>
    </article>
  </Reveal>
);

const FramerProjects = () => (
  <div className="min-h-screen bg-background">
    <Header />
    <main className="px-4 pb-16 pt-32 sm:px-6 sm:pb-24 sm:pt-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <header className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
            <p className="mb-4 text-sm font-bold uppercase text-muted-foreground">Selected work</p>
            <h1 className="mb-5 text-3xl font-bold sm:text-5xl">
              <span className="highlight-pink">Framer Websites</span>
            </h1>
            <p className="text-sm leading-relaxed text-muted-foreground sm:text-lg">
              I design and build modern, responsive websites using Framer, with a focus on clean
              layouts, engaging interactions, and user-friendly experiences.
            </p>
          </header>
        </Reveal>

        <section aria-label="Framer website projects" className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-7">
          {framerProjects.map((project, index) => (
            <FramerProjectCard key={`${project.title}-${index}`} project={project} index={index} />
          ))}
        </section>
      </div>
    </main>
    <Footer />
  </div>
);

export default FramerProjects;