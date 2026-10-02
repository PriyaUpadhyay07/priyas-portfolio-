import { ExternalLink, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerTitle,
} from "@/components/ui/drawer";
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
  <Drawer open={project !== null} onOpenChange={onOpenChange} shouldScaleBackground={false}>
    <DrawerContent className="max-h-[92vh] overflow-y-auto rounded-t-3xl border-x-0 border-b-0 border-t-4 border-foreground p-0">
      {project && (
        <div className="mx-auto w-full max-w-6xl px-4 pb-10 pt-3 sm:px-8 sm:pb-14">
          <div className="sticky top-3 z-20 flex justify-end">
            <DrawerClose asChild>
              <Button type="button" size="icon" variant="outline" className="rounded-full bg-background shadow-md" aria-label="Close project details">
                <X />
              </Button>
            </DrawerClose>
          </div>

          <div className="mt-1 grid gap-4 sm:gap-6">
            {(project.media?.length ? project.media : [{ type: "image" as const, src: project.image, alt: `${project.title} preview` }]).map((item, index) => (
              <div key={`${item.src}-${index}`} className="overflow-hidden rounded-xl border-2 border-foreground bg-muted shadow-lg sm:rounded-2xl">
                {item.type === "video" ? (
                  <video
                    src={item.src}
                    className="aspect-video w-full bg-foreground object-contain"
                    controls
                    playsInline
                    preload="metadata"
                    aria-label={`${project.title} walkthrough video`}
                  />
                ) : (
                  <img
                    src={item.src}
                    alt={item.alt || `${project.title} project image ${index + 1}`}
                    className="h-auto max-h-[76vh] w-full object-contain"
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mx-auto max-w-3xl py-8 sm:py-12">
            <DrawerTitle className="text-2xl font-bold sm:text-4xl">{project.title}</DrawerTitle>
            <DrawerDescription className="mt-2 text-sm leading-relaxed sm:text-base">{project.description}</DrawerDescription>
            <div className="mt-5">
              <BuiltWith tools={project.builtWith} />
            </div>

            <section className="mt-8" aria-labelledby="project-about-heading">
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

            <Button asChild size="lg" className="mt-9 w-full rounded-full sm:mx-auto sm:flex sm:max-w-sm">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
                <ExternalLink />
              </a>
            </Button>
          </div>
        </div>
      )}
    </DrawerContent>
  </Drawer>
);

export default ProjectDetailDrawer;