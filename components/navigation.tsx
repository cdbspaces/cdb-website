import { client } from "@/lib/sanity"
import { getSiteSettings } from "@/lib/queries"
import { NavigationClient } from "./navigation-client"

export async function Navigation() {
  const siteSettings = await client.fetch(getSiteSettings)

  return <NavigationClient settings={siteSettings} />
}
