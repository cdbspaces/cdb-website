"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { offices } from "@/lib/data"

export function Studios() {
  return (
    <section className="px-6 md:px-12 py-16 md:py-24">
      <ScrollReveal>
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
          Our Studios
        </p>
        <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-16 max-w-3xl text-balance">
          Two studios, one practice.
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
        {offices.map((office, i) => (
          <ScrollReveal key={office.id} delay={i * 0.15}>
            <div className="border-t border-border pt-8">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-6">
                {office.city}
              </h3>
              <div className="flex flex-col gap-4">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                    Address
                  </p>
                  <p className="font-mono text-sm text-foreground whitespace-pre-line leading-relaxed">
                    {office.address}
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                    Phone
                  </p>
                  <p className="font-mono text-sm text-foreground">{office.phone}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                    Email
                  </p>
                  <a
                    href={`mailto:${office.email}`}
                    className="font-mono text-sm text-accent underline-draw"
                  >
                    {office.email}
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  )
}
