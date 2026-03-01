"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"
import { urlForImage } from "@/lib/imageUrl"

const categories = ["All", "Workplace", "Hospitality", "Base Build", "Campus Design"] as const

export function ProjectsGrid({ projects = [] }: { projects?: any[] }) {
  const [activeFilter, setActiveFilter] = useState<string>("All")

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <div className="px-6 md:px-12">
      {/* Filters */}
      <div className="flex flex-wrap gap-6 md:gap-10 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`font-mono text-xs uppercase tracking-[0.2em] text-foreground underline-draw pb-1 ${activeFilter === cat ? "filter-active" : ""
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project._id || i}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="mb-6 break-inside-avoid"
            >
              <Link
                href={`/projects/${project.slug?.current || ''}`}
                className="group block relative overflow-hidden"
              >
                <div className={`relative ${i % 2 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"} bg-muted`}>
                  {project.heroImage && (
                    <Image
                      src={urlForImage(project.heroImage, 800)}
                      alt={project.heroImage.alt || project.title || "Project Image"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  )}
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/50 transition-all duration-500 flex flex-col justify-end p-6">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                      <h3 className="font-serif text-xl md:text-2xl text-background">
                        {project.title}
                      </h3>
                      <p className="font-mono text-xs uppercase tracking-[0.15em] text-background/70 mt-1">
                        {project.location}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  )
}

