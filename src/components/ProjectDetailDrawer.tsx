import * as DialogPrimitive from "@radix-ui/react-dialog";
import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import BuiltWith from "./BuiltWith";

export interface ProjectMedia {
  type: "image" | "video";
  src: string;
  alt?: string;
}

export interface Project {
  title: string;
  description: string;
  link: string;
  color: string;
  image: string;
  builtWith: string[];
  about: string[];
  media?: ProjectMedia[];
  extraTitle?: string;
  extraDescription?: string;
  points?: string[];
}

interface ProjectDetailDrawerProps {
  project: Project | null;
  onOpenChange: (open: boolean) => void;
}

const ProjectDetailDrawer = ({ project, onOpenChange }: ProjectDetailDrawerProps) => (
  <DialogPrimitive.Root open={project !== null} onOpenChange={onOpenChange}>
    <DialogPrimitive.Portal>
      <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-foreground/70 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
      <DialogPrimitive.Content
        className="fixed inset-x-0 bottom-0 z-50 flex max-h-[92dvh] flex-col rounded-t-3xl border-t-4 border-foreground bg-background shadow-2xl outline-none duration-300 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom"
      >
        {project && (
          <>
            <div className="flex shrink-0 items-center justify-between gap-3 border-b border-foreground/10 px-4 py-3 sm:px-8">
              <DialogPrimitive.Title className="truncate text-lg font-bold sm:text-xl">{project.title}</DialogPrimitive.Title>
              <DialogPrimitive.Close asChild>
                <Button type="button" size="icon" variant="outline" className="shrink-0 rounded-full bg-background" aria-label="Close project details">
                  <X />
                </Button>
              </DialogPrimitive.Close>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain">
              <div className="mx-auto w-full max-w-5xl px-4 pb-10 pt-4 sm:px-8">
                <div className="grid gap-3 sm:gap-4">
                  {(project.media?.length ? project.media : [{ type: "image" as const, src: project.image, alt: `${project.title} preview` }]).map((item, index) => (
                    <div key={`${item.src}-${index}`} className="overflow-hidden rounded-xl border-2 border-foreground bg-muted shadow-lg sm:rounded-2xl">
                      {item.type === "video" ? (
                        <video
                          src={item.src}
                          className="mx-auto block h-auto max-h-[45dvh] w-full bg-foreground object-contain"
                          controls
                          autoPlay
                          loop
                          muted
                          playsInline
                          preload="auto"
                          aria-label={`${project.title} walkthrough video`}
                        />
                      ) : (
                        <img
                          src={item.src}
                          alt={item.alt || `${project.title} project image ${index + 1}`}
                          className="mx-auto block h-auto max-h-[45dvh] w-full object-contain"
                        />
                      )}
                    </div>
                  ))}
                </div>

                <div className="mx-auto max-w-3xl pt-6 sm:pt-8">
                  <h2 className="text-2xl font-bold sm:text-3xl">{project.title}</h2>
                  <DialogPrimitive.Description className="mt-2 text-sm leading-relaxed text-muted-foreground sm:text-base">
                    {project.description}
                  </DialogPrimitive.Description>
                  <div className="mt-5">
                    <BuiltWith tools={project.builtWith} />
                  </div>

                  <section className="mt-6" aria-labelledby="project-about-heading">
                    <h3 id="project-about-heading" className="text-xl font-bold sm:text-2xl">
                      About
                    </h3>
                    <div className="mt-3 space-y-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                      {project.about.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                  </section>

                  {project.extraTitle && (
                    <section className="mt-8">
                      <h3 className="text-xl font-bold sm:text-2xl">{project.extraTitle}</h3>
                      {project.extraDescription && <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">{project.extraDescription}</p>}
                      {project.points && (
                        <ul className="mt-4 grid gap-3 text-sm text-muted-foreground sm:grid-cols-2 sm:text-base">
                          {project.points.map((point) => (
                            <li key={point} className="flex gap-3 rounded-lg border border-foreground/10 bg-secondary p-3">
                              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-foreground" aria-hidden="true" />
                              <span>{point}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </section>
                  )}

                  <Button asChild size="lg" className="mt-7 w-full rounded-full sm:mx-auto sm:flex sm:max-w-sm">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      View Project
                      <ExternalLink />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </>
        )}
      </DialogPrimitive.Content>
    </DialogPrimitive.Portal>
  </DialogPrimitive.Root>
);

export default ProjectDetailDrawer;
