"use client"

import { ScrollReveal } from "@/components/scroll-reveal"

export function Intro({ settings }: { settings?: any }) {
  return (
    <section className="px-6 md:px-12 py-24 md:py-32">
      <div className="flex flex-col md:flex-row gap-12 md:gap-20 max-w-7xl">
        {/* Left: founder quote */}
        <ScrollReveal className="md:w-3/5">
          <blockquote className="font-serif text-2xl md:text-3xl lg:text-4xl italic leading-snug text-foreground">
            {settings?.introQuote ? `"${settings.introQuote}"` : '"We believe architecture is not about buildings. It is about the moments they create, the conversations they enable, and the futures they make possible."'}
          </blockquote>
          <cite className="not-italic font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mt-6 block">
            {settings?.introQuoteAuthor || "Marcus Chen, Founding Principal"}
          </cite>
        </ScrollReveal>

        {/* Right: philosophy */}
        <ScrollReveal className="md:w-2/5" delay={0.2}>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent mb-4">
            {settings?.philosophyTitle || "Our Philosophy"}
          </p>
          <div className="space-y-4">
            <p className="font-mono text-sm leading-relaxed text-foreground/80">
              {settings?.philosophyText1 || "Collaborate Design and Build is an international design practice working across architecture, interiors, and strategy. Founded in 2005, we bring together diverse perspectives to create spaces that are both deeply considered and effortlessly functional."}
            </p>
            {settings?.philosophyText2 && (
              <p className="font-mono text-sm leading-relaxed text-foreground/80">
                {settings.philosophyText2}
              </p>
            )}
            {!settings?.philosophyText2 && !settings?.philosophyText1 && (
              <p className="font-mono text-sm leading-relaxed text-foreground/80">
                Every project begins with listening. We immerse ourselves in the context, culture, and ambitions of each client to deliver design solutions that feel inevitable rather than imposed.
              </p>
            )}
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

