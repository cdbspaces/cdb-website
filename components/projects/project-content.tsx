"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import type { Project } from "@/lib/data"

export function ProjectContent({ project }: { project: Project }) {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 max-w-7xl">
        {/* Left: sticky metadata */}
        <ScrollReveal className="lg:w-1/3">
          <div className="lg:sticky lg:top-28">
            <div className="flex flex-col gap-8">
              <MetaItem label="Client" value={project.client} />
              <MetaItem label="Location" value={project.location} />
              <MetaItem label="Area" value={project.area} />
              <MetaItem label="Year" value={String(project.year)} />
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-2">
                  Services
                </p>
                <div className="flex flex-col gap-1">
                  {project.services.map((service) => (
                    <p key={service} className="font-mono text-sm text-foreground">
                      {service}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Right: narrative */}
        <div className="lg:w-2/3">
          {project.description.map((paragraph, i) => (
            <div key={i}>
              <ScrollReveal delay={i * 0.1}>
                <p className="font-serif text-lg md:text-xl leading-relaxed text-foreground mb-8">
                  {paragraph}
                </p>
              </ScrollReveal>

              {/* Full-width image break after every 2 paragraphs */}
              {i < project.description.length - 1 && (i + 1) % 2 === 0 && (
                <ScrollReveal className="my-12">
                  <div className="relative aspect-[16/9] -mx-6 md:mx-0 overflow-hidden">
                    <Image
                      src={project.galleryImages[(i + 1) % project.galleryImages.length]}
                      alt={`${project.title} interior view`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 1024px) 100vw, 66vw"
                    />
                  </div>
                </ScrollReveal>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MetaItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
        {label}
      </p>
      <p className="font-mono text-sm text-foreground">{value}</p>
    </div>
  )
}
