import { groq } from 'next-sanity'

export const getAllProjects = groq`
  *[_type == "project"] | order(year desc) {
    _id,
    title,
    slug,
    location,
    year,
    category,
    shortDescription,
    heroImage
  }
`

export const getProjectBySlug = groq`
  *[_type == "project" && slug.current == $slug][0] {
    _id,
    title,
    slug,
    category,
    location,
    year,
    client,
    area,
    services,
    heroImage,
    gallery,
    shortDescription,
    fullDescription
  }
`

export const getSiteSettings = groq`
  *[_type == "siteSettings"][0] {
    firmName,
    logos[] {
      image,
      theme
    },
    tagline,
    introQuote,
    introQuoteAuthor,
    philosophyTitle,
    philosophyText1,
    philosophyText2,
    contactEmail,
    contactPhone,
    offices,
    linkedIn,
    instagram,
    heroSlideshow[] | order(order asc) {
      image,
      headline,
      subheadline,
      order
    }
  }
`
