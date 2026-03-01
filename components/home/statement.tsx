"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function Statement() {
  return (
    <section className="bg-foreground py-24 md:py-36 px-6 md:px-12">
      <ScrollReveal className="max-w-5xl mx-auto">
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/40 mb-8">
          Our Commitment
        </p>
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl italic leading-snug text-background text-balance">
          {"Every building we design must give more than it takes. Sustainability is not an add-on; it is the starting point of every conversation."}
        </h2>
      </ScrollReveal>
    </section>
  )
}
