"use client"

import Image from "next/image"
import { useRef } from "react"
import { motion } from "framer-motion"
import { ScrollReveal } from "@/components/scroll-reveal"

interface ProjectGalleryProps {
  images: string[]
  title: string
}

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeft = useRef(0)

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true
    startX.current = e.pageX - (containerRef.current?.offsetLeft ?? 0)
    scrollLeft.current = containerRef.current?.scrollLeft ?? 0
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault()
    const x = e.pageX - (containerRef.current?.offsetLeft ?? 0)
    const walk = (x - startX.current) * 1.5
    if (containerRef.current) {
      containerRef.current.scrollLeft = scrollLeft.current - walk
    }
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  return (
    <section className="py-16 md:py-24">
      <div className="px-6 md:px-12 mb-8">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Gallery
          </p>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <motion.div
          ref={containerRef}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="flex gap-4 px-6 md:px-12 overflow-x-auto hide-scrollbar cursor-grab active:cursor-grabbing select-none"
        >
          {images.map((img, i) => (
            <div key={i} className="flex-shrink-0 w-[280px] md:w-[360px]">
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={img}
                  alt={`${title} gallery image ${i + 1}`}
                  fill
                  className="object-cover pointer-events-none"
                  sizes="360px"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </motion.div>
      </ScrollReveal>
    </section>
  )
}
