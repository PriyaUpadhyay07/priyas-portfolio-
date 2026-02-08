import { useState } from "react";
import { ExternalLink, Play, X } from "lucide-react";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import startupIdeasImage from "@/assets/startup-ideas-ai.png";
import bakeryImage from "@/assets/bakery-website.png";
import movieAppImage from "@/assets/movie-app.png";
import wisetechImage from "@/assets/wisetech-advisor.png";
import rareBeautyImage from "@/assets/rare-beauty-website.png";
import fashionBrandImage from "@/assets/fashion-brand-website.png";
import fashionDesign1 from "@/assets/fashion-design-1.png";
import fashionDesign2 from "@/assets/fashion-design-2.png";
import fashionEcommerce1 from "@/assets/fashion-ecommerce-1.png";
import fashionEcommerce2 from "@/assets/fashion-ecommerce-2.png";

interface GalleryItem {
  type: "image" | "video";
  src: string;
}

const Projects = () => {
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem[] | null>(null);

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
      image: bakeryImage,
    },
    {
      title: "Movie App Prototype",
      description: "A streaming app prototype with clean UI and intuitive user flow.",
      link: "https://www.figma.com/proto/JGjsIQxI8Nqcx3iljFNWhD/Movie-App-Prototype--Community-?node-id=117-341",
      color: "bg-highlight-blue",
      image: movieAppImage,
    },
    {
      title: "WiseTech Advisor Blog",
      description: "A live blog created using WordPress to showcase tech and gadget articles.",
      link: "https://wisetechadvisor.com/",
      color: "bg-highlight-green",
      image: wisetechImage,
    },
    {
      title: "Rare Beauty E-Commerce",
      description: "A modern beauty e-commerce website with elegant product showcases and smooth animations.",
      link: "https://teal-treacle-66ee62.netlify.app/",
      color: "bg-highlight-purple",
      image: rareBeautyImage,
    },
    {
      title: "Fashion Brand Ecommerce Animated Web Design",
      description: "A stunning animated e-commerce website design showcasing modern fashion with smooth transitions and engaging visuals.",
      link: null,
      color: "bg-highlight-pink",
      image: fashionEcommerce1,
      isGallery: true,
      galleryItems: [
        { type: "video", src: "/fashion-brand-video.mp4" },
        { type: "image", src: fashionEcommerce1 },
        { type: "image", src: fashionEcommerce2 },
      ],
    },
    {
      title: "Fashion Brand Website Design",
      description: "An elegant fashion brand website featuring sophisticated layouts, premium aesthetics, and seamless user experience.",
      link: null,
      color: "bg-highlight-orange",
      image: fashionBrandImage,
      isGallery: true,
      galleryItems: [
        { type: "image", src: fashionDesign1 },
        { type: "image", src: fashionDesign2 },
      ],
    },
  ];

  const handleCardClick = (project: typeof projects[0]) => {
    if (project.isGallery && project.galleryItems) {
      setSelectedGallery(project.galleryItems as GalleryItem[]);
    }
  };

  return (
    <section id="projects" className="py-12 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 text-center">
          Featured <span className="highlight-yellow">Projects</span>
        </h2>
        <p className="text-center text-muted-foreground mb-8 sm:mb-12 text-sm sm:text-base">A selection of my recent work</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8">
          {projects.map((project, index) => {
            const hasLink = project.link !== null;
            const isGallery = project.isGallery;

            if (hasLink) {
              return (
                <a
                  key={index}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg border border-foreground/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
                >
                  <div className={`${project.color} w-full h-32 sm:h-48 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden`}>
                    {project.image ? (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    ) : (
                      <span className="text-4xl sm:text-6xl">🎨</span>
                    )}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all text-sm sm:text-base">
                    View Project
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </a>
              );
            }

            if (isGallery) {
              return (
                <div
                  key={index}
                  onClick={() => handleCardClick(project)}
                  className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg border border-foreground/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 cursor-pointer"
                >
                  <div className={`${project.color} w-full h-32 sm:h-48 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden`}>
                    {project.image && (
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                    )}
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-foreground/80 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-base">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-2 text-foreground font-medium group-hover:gap-3 transition-all text-sm sm:text-base">
                    View Designs
                    <ExternalLink className="w-3 h-3 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            }

            return (
              <div
                key={index}
                className="group bg-white rounded-2xl sm:rounded-3xl p-4 sm:p-8 shadow-lg border border-foreground/10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300"
              >
                <div className={`${project.color} w-full h-32 sm:h-48 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 flex items-center justify-center group-hover:scale-105 transition-transform overflow-hidden`}>
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-4xl sm:text-6xl">🎨</span>
                  )}
                </div>
                <h3 className="text-lg sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-foreground/80 transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-3 sm:mb-4 leading-relaxed text-xs sm:text-base">
                  {project.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dribbble-style Gallery Modal */}
      <Dialog open={selectedGallery !== null} onOpenChange={() => setSelectedGallery(null)}>
        <DialogContent className="max-w-6xl w-[95vw] max-h-[90vh] p-0 bg-background border-none overflow-hidden">
          <div className="relative">
            {/* Close button */}
            <DialogClose className="absolute top-4 right-4 z-50 bg-foreground/90 hover:bg-foreground text-background rounded-full p-2 transition-colors shadow-lg">
              <X className="w-5 h-5" />
            </DialogClose>
            
            {/* Gallery content */}
            <div className="overflow-y-auto max-h-[90vh] p-6 md:p-8">
              <div className="flex flex-col gap-6">
                {selectedGallery?.map((item, index) => (
                  <div key={index} className="w-full rounded-xl overflow-hidden shadow-lg">
                    {item.type === "video" ? (
                      <video 
                        src={item.src} 
                        controls 
                        autoPlay
                        className="w-full h-auto"
                      />
                    ) : (
                      <img 
                        src={item.src} 
                        alt={`Design ${index + 1}`} 
                        className="w-full h-auto object-contain"
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
