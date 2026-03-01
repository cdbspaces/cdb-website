"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const pillars = [
  {
    number: "01",
    title: "Collaborate",
    description:
      "Architecture is too complex for any one mind. We work as a close-knit team with our clients, consultants, and craftspeople from the very first conversation. Decisions are made together at the table, not handed down from a corner office. This openness leads to richer ideas and buildings that genuinely belong to the people who use them.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We believe design is a discipline of listening. Every site has a story, every climate a logic, every client a set of values worth honouring. We work across scales, from urban master plans to bespoke furniture details, applying the same care and curiosity to each. Our design language is grounded in honest materials, natural light, and spatial generosity.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "A drawing is a promise. We stay involved through construction because details matter, and the gap between intention and execution is where quality is won or lost. We work closely with local contractors and artisans, valuing the intelligence of the hand as much as the precision of the digital model. The result is work that feels crafted, not merely assembled.",
  },
]

export function Approach() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 bg-foreground">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/40 mb-4">
          Our Approach
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-background mb-16 md:mb-24 max-w-3xl text-balance">
          Three words that define how we work and what we stand for.
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-0">
        {pillars.map((pillar, i) => (
          <ScrollReveal key={pillar.number} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 md:py-16 border-t border-background/10">
              <div className="md:w-1/6">
                <p className="font-mono text-sm text-background/30">{pillar.number}</p>
              </div>
              <div className="md:w-1/3">
                <h3 className="font-serif text-2xl md:text-3xl italic text-background">
                  {pillar.title}
                </h3>
              </div>
              <div className="md:w-1/2">
                <p className="font-mono text-sm leading-relaxed text-background/60">
                  {pillar.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
