import type { Metadata } from "next"
import { ProjectsGrid } from "@/components/projects/projects-grid"
import { client } from "@/lib/sanity"
import { getAllProjects } from "@/lib/queries"

export const metadata: Metadata = {
  title: "Projects | Collaborate Design and Build",
  description: "Explore our portfolio of architecture, interior design, and workplace strategy projects across the globe.",
}

export const revalidate = 60

export default async function ProjectsPage() {
  const projects = await client.fetch(getAllProjects)

  return (
    <div className="pt-28 md:pt-36 pb-24">
      <div className="px-6 md:px-12 mb-16">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-foreground">
          Projects
        </h1>
        <p className="font-mono text-sm text-muted-foreground mt-4 max-w-xl leading-relaxed">
          A curated selection of our work across workplace, hospitality, base build, and campus design.
        </p>
      </div>
      <ProjectsGrid projects={projects} />
    </div>
  )
}

