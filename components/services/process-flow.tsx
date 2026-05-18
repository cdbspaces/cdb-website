"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const processSteps = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "We begin every project with deep listening. We engage with your team, understand your goals, constraints, and aspirations. We analyze the site context, climate, culture, and market conditions. This phase produces a clear strategic direction for the design work ahead.",
  },
  {
    number: "02",
    title: "Concept Development",
    description:
      "Drawing on the insights from discovery, we develop conceptual design directions that explore different spatial, material, and experiential possibilities. We test ideas through sketches, models, and digital visualization. Multiple concepts are presented and refined through collaborative dialogue.",
  },
  {
    number: "03",
    title: "Design Development",
    description:
      "Once a concept direction is selected, we develop it in detail. This phase includes detailed floor plans, elevations, sections, material specifications, and technical coordination. We refine proportions, details, and finishes. Regular design reviews ensure alignment with the original vision.",
  },
  {
    number: "04",
    title: "Documentation & Delivery",
    description:
      "We prepare comprehensive construction documentation, specifications, and material schedules. We coordinate with structural and MEP consultants. For some projects, we stay involved through the construction and fit-out phases to ensure every detail is realized as intended.",
  },
]

export function ProcessFlow() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24 bg-foreground">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/40 mb-4">
          Our Process
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-background mb-16 md:mb-24 max-w-3xl text-balance">
          How we work from initial brief to project completion.
        </h2>
      </ScrollReveal>

      <div className="flex flex-col gap-0">
        {processSteps.map((step, i) => (
          <ScrollReveal key={step.number} delay={i * 0.1}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-16 py-12 md:py-16 border-t border-background/10 last:border-b">
              <div className="md:w-1/6">
                <p className="font-mono text-sm text-background/30">{step.number}</p>
              </div>
              <div className="md:w-1/3">
                <h3 className="font-serif text-2xl md:text-3xl italic text-background">
                  {step.title}
                </h3>
              </div>
              <div className="md:w-1/2">
                <p className="font-mono text-sm leading-relaxed text-background/60">
                  {step.description}
                </p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
