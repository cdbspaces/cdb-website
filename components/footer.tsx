import { client } from "@/lib/sanity"
import { getSiteSettings } from "@/lib/queries"
import { FooterClient } from "./footer-client"

export async function Footer() {
  const siteSettings = await client.fetch(getSiteSettings)

  return <FooterClient settings={siteSettings} />
}
