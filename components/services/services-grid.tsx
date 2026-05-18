"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

const services = [
  {
    number: "01",
    title: "Architecture",
    description:
      "From urban masterplans to individual buildings, we design structures that respond to their context and serve their communities. Our work spans institutional, residential, hospitality, and workplace projects. We approach each brief with rigorous analysis, creative thinking, and a deep commitment to sustainable design principles.",
    applications: ["New Buildings", "Adaptive Reuse", "Urban Planning", "Master Planning"],
  },
  {
    number: "02",
    title: "Interior Design",
    description:
      "We create interior environments that are as thoughtfully designed as the buildings that contain them. Our interiors philosophy emphasizes honest materials, natural light, spatial generosity, and human scale. We design everything from the overall spatial organization to bespoke furniture pieces and lighting solutions.",
    applications: ["Residential Interiors", "Commercial Spaces", "Hospitality Design", "Workplace Interiors"],
  },
  {
    number: "03",
    title: "Workplace Strategy",
    description:
      "The modern workplace demands a new approach. We combine research, user engagement, and design thinking to create workplace environments that support both individual focus and collaborative work. Our strategies address flexibility, wellbeing, sustainability, and organizational culture.",
    applications: ["Workplace Planning", "Space Programming", "Fit-out Design", "Change Management"],
  },
  {
    number: "04",
    title: "Heritage & Restoration",
    description:
      "Working with heritage buildings demands sensitivity, expertise, and respect for history. We specialize in thoughtful restoration projects that honour original character while meeting contemporary needs. Each intervention is designed to create a dialogue between old and new.",
    applications: ["Heritage Assessment", "Restoration Design", "Adaptive Reuse", "Conservation Planning"],
  },
  {
    number: "05",
    title: "Landscape Design",
    description:
      "Landscape is integral to great architecture. We design outdoor spaces that extend living areas, improve microclimate, support biodiversity, and create memorable experiences. Our work ranges from intimate gardens to large-scale public realm projects.",
    applications: ["Garden Design", "Public Spaces", "Outdoor Amenities", "Ecological Planting"],
  },
  {
    number: "06",
    title: "Lighting Design",
    description:
      "Light shapes how we experience space. We design layered lighting schemes that support the function of a space while creating atmosphere and drama. Our lighting design integrates natural light strategies with carefully considered artificial lighting.",
    applications: ["Architectural Lighting", "Interior Lighting", "Landscape Lighting", "Facade Lighting"],
  },
]

export function ServicesGrid() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-5xl mb-16 md:mb-24">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Core Services
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground text-balance">
            A full spectrum of design and delivery expertise.
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
