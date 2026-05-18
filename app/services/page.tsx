import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessFlow } from "@/components/services/process-flow"

export const metadata: Metadata = {
  title: "Services | Collaborate Design and Build",
  description: "Corporate office design, workplace strategy, hospitality interiors, and branded environments. Expert interior design for offices and hotels.",
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ProcessFlow />
    </>
  )
}
