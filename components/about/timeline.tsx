"use client"

import { useRef } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { milestones } from "@/lib/data"

export function Timeline() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section className="py-16 md:py-24 bg-foreground">
      <div className="px-6 md:px-12 mb-12">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/40 mb-4">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-background">
            Milestones
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div
          ref={scrollRef}
          className="flex gap-px overflow-x-auto hide-scrollbar"
        >
          {milestones.map((milestone, i) => (
            <div
              key={milestone.year}
              className="flex-shrink-0 w-[260px] md:w-[320px] p-6 md:p-8 border-r border-background/10 last:border-r-0 first:ml-6 md:first:ml-12 last:mr-6 md:last:mr-12"
            >
              <p className="font-mono text-3xl md:text-4xl text-background/20 mb-4">
                {milestone.year}
              </p>
              <p className="font-serif text-sm md:text-base text-background/70 leading-relaxed">
                {milestone.event}
              </p>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
