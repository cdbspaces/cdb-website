import type { Metadata } from "next"
import { ServicesHero } from "@/components/services/services-hero"
import { ServicesGrid } from "@/components/services/services-grid"
import { ProcessFlow } from "@/components/services/process-flow"

export const metadata: Metadata = {
  title: "Services | Collaborate Design and Build",
  description: "Architecture, interior design, workplace strategy, and heritage restoration services. From concept through completion.",
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
