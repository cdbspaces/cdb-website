"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    number: "01",
    title: "Workplace Design & Strategy",
    description:
      "We design corporate offices that support productivity, collaboration, and wellbeing. Our approach combines space programming, furniture planning, and spatial design to create flexible, efficient work environments. We understand the modern workplace—from open collaboration zones to focused work areas—and design spaces that reflect your organizational culture.",
    applications: ["Office Planning", "Fit-out Design", "Furniture Selection", "Space Programming"],
  },
  {
    number: "02",
    title: "Hospitality Interiors",
    description:
      "From boutique hotels to upscale restaurants and bars, we create hospitality spaces that deliver exceptional guest experiences. We focus on material authenticity, atmospheric lighting, functional layouts, and branded environments that tell your story and engage your guests from arrival to departure.",
    applications: ["Hotel Design", "Restaurant Design", "Bar & Lounge", "Guest Suites"],
  },
  {
    number: "03",
    title: "Interior Architecture",
    description:
      "We provide detailed interior architectural services including custom layouts, partition systems, built-in cabinetry, and spatial organization. Our designs optimize functionality while maintaining visual sophistication and material integrity.",
    applications: ["Custom Millwork", "Space Planning", "Detailed Design", "Material Specification"],
  },
  {
    number: "04",
    title: "Lighting Design",
    description:
      "Thoughtful lighting design defines atmosphere and functionality. We create layered lighting schemes that enhance spatial experience, support task performance, and create the right ambiance for your space—whether energizing offices, intimate restaurants, or welcoming lobbies.",
    applications: ["Ambient Lighting", "Task Lighting", "Accent Lighting", "Controls & Automation"],
  },
]

export function ServicesGrid() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-5xl mb-16 md:mb-24">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
            Expert design for corporate and hospitality spaces.
          </h2>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {services.map((service, i) => (
          <ScrollReveal key={service.number} delay={i * 0.05}>
            <div className="flex flex-col py-12 md:py-16 px-6 md:px-8 border border-border">
              <p className="font-mono text-sm text-muted-foreground mb-4">{service.number}</p>
              <h3 className="font-serif text-2xl md:text-3xl italic text-foreground mb-6">
                {service.title}
              </h3>
              <p className="font-mono text-sm leading-relaxed text-foreground/70 mb-8">
                {service.description}
              </p>
              <div className="mt-auto">
                <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Applications
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.applications.map((app) => (
                    <span
                      key={app}
                      className="font-mono text-xs px-3 py-1 border border-border text-foreground/70"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
