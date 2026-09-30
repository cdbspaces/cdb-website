import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Approach } from "@/components/about/approach"
import { Studios } from "@/components/about/studios"
import { client } from "@/lib/sanity"
import { getSiteSettings } from "@/lib/queries"

export const metadata: Metadata = {
  title: "About | Collaborate Design and Build",
  description: "A small, focused architecture and interiors practice in Hyderabad and Bangalore. We collaborate, we design, we build.",
}

export const revalidate = 60

export default async function AboutPage() {
  const siteSettings = await client.fetch(getSiteSettings)

  return (
    <>
      <AboutHero />
      <Approach />
      <Studios settings={siteSettings} />
    </>
  )
}

