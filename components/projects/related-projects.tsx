"use client"

import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Project } from "@/lib/data"

export function RelatedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 border-t border-border">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-12">
          Related Projects
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ScrollReveal key={project.id} delay={i * 0.15}>
            <Link href={`/projects/${project.id}`} className="group block relative overflow-hidden">
              <div className="relative aspect-[4/3]">
                <Image
                  src={project.image}
                  alt={`${project.title} - ${project.location}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-all duration-500 flex flex-col justify-end p-6">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <h3 className="font-serif text-xl md:text-2xl text-background">
                      {project.title}
                    </h3>
                    <p className="font-mono text-xs uppercase tracking-[0.15em] text-background/70 mt-1">
                      {project.location}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
