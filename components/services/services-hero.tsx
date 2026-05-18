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
          From concept to completion, we provide comprehensive design and delivery services.
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 max-w-3xl"
      >
        <p className="font-mono text-sm leading-relaxed text-foreground/70">
          Collaborate Design and Build offers a full spectrum of architectural and design services tailored to meet the unique needs of each project. Our multidisciplinary team brings deep expertise across architecture, interior design, landscape design, heritage restoration, workplace strategy, and lighting design. Whether you're embarking on a new building, reimagining an existing space, or restoring a heritage structure, we partner with you to create environments that are both beautiful and purposeful.
        </p>
      </motion.div>
    </section>
  )
}
