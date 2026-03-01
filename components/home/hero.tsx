"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { urlForImage } from "@/lib/imageUrl"

const defaultHeroImages = ["/images/hero-1.jpg", "/images/hero-2.jpg", "/images/hero-3.jpg"]

export function Hero({ settings }: { settings?: any }) {
  const slides = settings?.heroSlideshow || []
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    if (slides.length <= 1 && defaultHeroImages.length <= 1) return

    const interval = setInterval(() => {
      const total = slides.length > 0 ? slides.length : defaultHeroImages.length
      setCurrentSlide((prev) => (prev + 1) % total)
    }, 6000)
    return () => clearInterval(interval)
  }, [slides.length])

  const currentSlideData = slides.length > 0 ? slides[currentSlide] : null

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background images with crossfade */}
      <AnimatePresence mode="sync">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <Image
            src={currentSlideData ? urlForImage(currentSlideData.image, 1920, 1080) : defaultHeroImages[currentSlide]}
            alt={currentSlideData?.image?.alt || "Architectural photography showcasing modern design"}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-foreground/30" />
        </motion.div>
      </AnimatePresence>

      {/* Text overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 pb-20 md:pb-24">
        <motion.h1
          key={`headline-${currentSlide}`}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl text-background leading-[0.95] max-w-4xl text-balance whitespace-pre-line"
        >
          {currentSlideData?.headline || settings?.firmName || "Collaborate\nDesign and Build"}
        </motion.h1>
        <motion.p
          key={`subheadline-${currentSlide}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="font-mono text-xs md:text-sm uppercase tracking-[0.2em] text-background/80 mt-6"
        >
          {currentSlideData?.subheadline || settings?.tagline || "Architecture / Interiors / Strategy"}
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-background/60">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-8 bg-background/40"
        />
      </motion.div>
    </section>
  )
}
