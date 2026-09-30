"use client"

import { ScrollReveal } from "@/components/scroll-reveal"
import { offices as defaultOffices } from "@/lib/data"

export function Studios({ settings }: { settings?: any }) {
  const officesList =
    settings?.offices && settings.offices.length > 0
      ? settings.offices
      : defaultOffices

  const defaultEmail = settings?.contactEmail || "vp@collabdesignandbuild.com"
  const defaultPhone = settings?.contactPhone || "+91 40 48527484"

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
        {officesList.map((office: any, i: number) => {
          const phone = office.phone || defaultPhone
          const email = office.email || defaultEmail

          return (
            <ScrollReveal key={office.id || office._key || i} delay={i * 0.15}>
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
                  {phone && (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                        Phone
                      </p>
                      <a
                        href={`tel:${phone.replace(/\s+/g, '')}`}
                        className="font-mono text-sm text-foreground hover:text-accent transition-colors"
                      >
                        {phone}
                      </a>
                    </div>
                  )}
                  {email && (
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground mb-1">
                        Email
                      </p>
                      <a
                        href={`mailto:${email}`}
                        className="font-mono text-sm text-accent underline-draw"
                      >
                        {email}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          )
        })}
      </div>
    </section>
  )
}
