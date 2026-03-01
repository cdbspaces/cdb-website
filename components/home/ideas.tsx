"use client"

import Image from "next/image"
import { useRef } from "react"
import { ScrollReveal } from "@/components/scroll-reveal"
import { articles } from "@/lib/data"

export function Ideas() {
  const scrollRef = useRef<HTMLDivElement>(null)

  return (
    <section id="ideas" className="py-24 md:py-32">
      <div className="px-6 md:px-12 mb-12">
        <ScrollReveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Latest Ideas
          </p>
          <h2 className="font-serif text-3xl md:text-4xl text-foreground">
            Thinking & Research
          </h2>
        </ScrollReveal>
      </div>

      <ScrollReveal>
        <div
          ref={scrollRef}
          className="flex gap-6 px-6 md:px-12 overflow-x-auto hide-scrollbar pb-4"
        >
          {articles.map((article) => (
            <article
              key={article.id}
              className="group flex-shrink-0 w-[300px] md:w-[360px] cursor-pointer"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="360px"
                />
              </div>
              <div className="mt-5">
                <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent mb-2">
                  {article.category}
                </p>
                <h3 className="font-serif text-lg md:text-xl text-foreground leading-snug group-hover:text-accent transition-colors duration-300">
                  {article.title}
                </h3>
                <p className="font-mono text-xs text-muted-foreground mt-2">
                  {article.date}
                </p>
              </div>
            </article>
          ))}
        </div>
      </ScrollReveal>
    </section>
  )
}
