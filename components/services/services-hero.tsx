"use client"

import { motion } from "framer-motion"

export function ServicesHero() {
  return (
    <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          What We Offer
        </p>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl italic leading-snug text-foreground text-balance">
          Designing corporate and hospitality spaces that inspire, engage, and perform.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 max-w-3xl"
      >
        <p className="font-mono text-sm leading-relaxed text-foreground/70">
          We specialize in creating exceptional interior environments for corporate offices and hospitality venues. Our expertise spans workplace strategy, office design, hotel and restaurant interiors, and branded hospitality spaces. We combine thoughtful spatial planning, materiality, and guest/employee experience to create environments that reflect your brand, support your operations, and leave a lasting impression.
        </p>
      </motion.div>
    </section>
  )
}
