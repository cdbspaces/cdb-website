"use client"

import Image from "next/image"
import { ScrollReveal } from "@/components/scroll-reveal"
import { teamMembers } from "@/lib/data"

export function TeamGrid() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          The Team
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4 max-w-3xl text-balance">
          Small enough to care, skilled enough to deliver.
        </h2>
        <p className="font-mono text-sm leading-relaxed text-foreground/70 max-w-2xl mb-16">
          We are a team of 15 architects, designers, and project managers across our
          Hyderabad and Bangalore studios. Every member of our team is involved in
          design, and every project is led by a principal.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
        {teamMembers.map((member, i) => (
          <ScrollReveal key={member.id} delay={i * 0.1}>
            <div className="group relative overflow-hidden">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name}, ${member.title}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/80 transition-all duration-500 flex items-end p-6">
                  <p className="font-mono text-xs leading-relaxed text-background opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {member.bio}
                  </p>
                </div>
              </div>
              <div className="mt-4">
                <h3 className="font-serif text-lg text-foreground">{member.name}</h3>
                <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground mt-1">
                  {member.title}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
