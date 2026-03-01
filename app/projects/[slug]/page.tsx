import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ScrollReveal } from "@/components/scroll-reveal"
import { client } from "@/lib/sanity"
import { getProjectBySlug } from "@/lib/queries"
import { urlForImage } from "@/lib/imageUrl"

export const revalidate = 60

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const resolvedParams = await params
  const project = await client.fetch(getProjectBySlug, { slug: resolvedParams.slug })

  if (!project) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[70vh] w-full mt-20">
        <Image
          src={urlForImage(project.heroImage)}
          alt={project.heroImage?.alt || project.title}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/20" />
        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12 pb-16">
          <ScrollReveal delay={0.2}>
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-background/80 mb-4">
              {project.category}
            </p>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl text-background max-w-4xl text-balance">
              {project.title}
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Project Details */}
      <section className="px-6 md:px-12 py-16 md:py-24 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-16 md:gap-24">
          <div className="md:w-1/3">
            <ScrollReveal>
              <div className="grid grid-cols-2 lg:grid-cols-1 gap-8">
                {project.location && (
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-2">
                      Location
                    </h3>
                    <p className="font-mono text-sm">{project.location}</p>
                  </div>
                )}
                {project.year && (
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-2">
                      Completed
                    </h3>
                    <p className="font-mono text-sm">{project.year}</p>
                  </div>
                )}
                {project.client && (
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-2">
                      Client
                    </h3>
                    <p className="font-mono text-sm">{project.client}</p>
                  </div>
                )}
                {project.area && (
                  <div>
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-2">
                      Area
                    </h3>
                    <p className="font-mono text-sm">{project.area}</p>
                  </div>
                )}
                {project.services && project.services.length > 0 && (
                  <div className="col-span-2 lg:col-span-1 border-t border-border pt-8 mt-4 lg:mt-8">
                    <h3 className="font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/50 mb-6">
                      Services
                    </h3>
                    <ul className="space-y-3">
                      {project.services.map((service: string, i: number) => (
                        <li key={i} className="font-mono text-sm text-foreground">
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </ScrollReveal>
          </div>

          <div className="md:w-2/3">
            <ScrollReveal delay={0.2}>
              <div className="prose prose-lg prose-headings:font-serif prose-p:font-mono prose-p:text-sm prose-p:leading-relaxed max-w-none">
                <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl text-foreground mb-8 text-balance leading-tight">
                  {project.shortDescription}
                </h2>
                <div className="font-mono text-sm leading-relaxed text-foreground/80 whitespace-pre-wrap">
                  {project.fullDescription || project.shortDescription}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <section className="px-6 md:px-12 py-12 pb-24 max-w-[1600px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {project.gallery.map((image: any, i: number) => (
              <ScrollReveal
                key={image._key || i}
                delay={i * 0.1}
                className={
                  i % 3 === 0
                    ? "md:col-span-2 aspect-[16/9] md:aspect-[21/9]"
                    : "aspect-[4/5] md:aspect-square"
                }
              >
                <div className="relative w-full h-full bg-muted">
                  <Image
                    src={urlForImage(image, 1200)}
                    alt={image.alt || `${project.title} gallery image ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes={i % 3 === 0 ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
                  />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* Next Project / Footer Navigation */}
      <section className="px-6 md:px-12 py-24 border-t border-border flex justify-between items-center">
        <ScrollReveal>
          <Link
            href="/projects"
            className="underline-draw font-mono text-xs uppercase tracking-[0.2em] text-foreground"
          >
            ← All Projects
          </Link>
        </ScrollReveal>
      </section>
    </article>
  )
}
