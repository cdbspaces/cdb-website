"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import type { Project } from "@/lib/data"

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <Image
        src={project.image}
        alt={`${project.title} - ${project.location}`}
        fill
        className="object-cover"
        priority
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-foreground/30" />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 pb-20 md:pb-24">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-serif text-4xl md:text-6xl lg:text-7xl text-background leading-[0.95] max-w-3xl text-balance"
        >
          {project.title}
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex items-center gap-6 mt-6"
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/80">
            {project.location}
          </p>
          <span className="w-8 h-px bg-background/40" />
          <p className="font-mono text-xs text-background/60">
            {project.year}
          </p>
        </motion.div>
      </div>
    </section>
  )
}
