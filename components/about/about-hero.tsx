"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AboutHero() {
  return (
    <section className="pt-32 md:pt-44 pb-16 md:pb-24 px-6 md:px-12">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="max-w-5xl"
      >
        <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
          Our Philosophy
        </p>
        <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl xl:text-7xl italic leading-snug text-foreground text-balance">
          {"We collaborate. We design. We build."}
        </h1>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-16 flex flex-col lg:flex-row gap-12 lg:gap-20"
      >
        <div className="lg:w-1/2">
          <p className="font-mono text-sm leading-relaxed text-foreground/70">
            Collaborate Design and Build is an architecture and interiors practice
            rooted in the belief that the best work happens when people think and
            make together. Founded in Hyderabad in 2016, we are a small, focused
            team of architects, interior designers, and project managers who see
            every project as a partnership between our studio, our clients, and the
            craftspeople who bring ideas to life.
          </p>
          <p className="font-mono text-sm leading-relaxed text-foreground/70 mt-6">
            Our name is our method. We begin every project by listening deeply,
            understanding context, climate, and aspiration before drawing a single
            line. We design with rigour and sensitivity, drawing from India{"'"}s rich
            material traditions while embracing contemporary spatial ideas. And we
            build with care, staying involved through construction to ensure every
            detail is realised as intended.
          </p>
        </div>
        <div className="lg:w-1/2 relative aspect-[4/3] overflow-hidden">
          <Image
            src="/images/studio.jpg"
            alt="The Collaborate Design and Build studio"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </motion.div>
    </section>
  )
}
