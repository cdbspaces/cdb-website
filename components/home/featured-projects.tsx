"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { urlForImage } from "@/lib/imageUrl"

export function FeaturedProjects({ projects = [] }: { projects?: any[] }) {
  const featured = projects.slice(0, 3)

  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12">
          Selected Work
        </p>
      </ScrollReveal>

      {featured.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {featured.map((project, i) => (
            <ScrollReveal
              key={project._id || i}
              delay={i * 0.15}
              className={i === 2 ? "md:row-span-2" : ""}
            >
              <Link href={`/projects/${project.slug?.current || ''}`} className="group block relative overflow-hidden">
                <div className={`relative ${i === 2 ? "aspect-[3/4]" : "aspect-[4/3]"} bg-muted`}>
                  {project.heroImage && (
                    <Image
                      src={urlForImage(project.heroImage, 800, i === 2 ? 1066 : 600)}
                      alt={project.heroImage.alt || project.title || "Project Image"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes={i === 2 ? "(max-width: 768px) 100vw, 33vw" : "(max-width: 768px) 100vw, 33vw"}
                    />
                  )}
                  {/* Hover scrim */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500" />
                  <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="font-serif text-xl md:text-2xl text-background">{project.title}</h3>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-background/70 mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
                {/* Always visible on mobile */}
                <div className="mt-4 md:hidden">
                  <h3 className="font-serif text-lg text-foreground">{project.title}</h3>
                  <div className="flex items-center gap-4 mt-1">
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      {project.location}
                    </p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {project.year}
                    </p>
                  </div>
                </div>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <p className="font-mono text-sm text-foreground/50">No featured projects to display.</p>
      )}

      <ScrollReveal className="mt-12">
        <Link
          href="/projects"
          className="underline-draw font-mono text-xs uppercase tracking-[0.2em] text-foreground"
        >
          View All Projects
        </Link>
      </ScrollReveal>
    </section>
  )
}

