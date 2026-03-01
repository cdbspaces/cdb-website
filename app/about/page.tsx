import type { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { Approach } from "@/components/about/approach"
import { TeamGrid } from "@/components/about/team-grid"
import { Timeline } from "@/components/about/timeline"
import { Studios } from "@/components/about/studios"

export const metadata: Metadata = {
  title: "About | Collaborate Design and Build",
  description: "A small, focused architecture and interiors practice in Hyderabad and Bangalore. We collaborate, we design, we build.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Approach />
      <TeamGrid />
      <Timeline />
      <Studios />
    </>
  )
}
