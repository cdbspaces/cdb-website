import { Hero } from "@/components/home/hero"
import { Intro } from "@/components/home/intro"
import { FeaturedProjects } from "@/components/home/featured-projects"
import { Statement } from "@/components/home/statement"
import { Ideas } from "@/components/home/ideas"
import { client } from "@/lib/sanity"
import { getAllProjects, getSiteSettings } from "@/lib/queries"

export const revalidate = 60

export default async function HomePage() {
  const projects = await client.fetch(getAllProjects)
  const siteSettings = await client.fetch(getSiteSettings)

  return (
    <>
      <Hero settings={siteSettings} />
      <Intro settings={siteSettings} />
      <FeaturedProjects projects={projects} />
      <Statement />
      <Ideas />
    </>
  )
}
