export interface Project {
  id: string
  title: string
  location: string
  year: number
  category: "Workplace" | "Hospitality" | "Education" | "Mixed-use"
  image: string
  orientation: "landscape" | "portrait"
  client: string
  area: string
  services: string[]
  description: string[]
  galleryImages: string[]
}

export interface TeamMember {
  id: string
  name: string
  title: string
  image: string
  bio: string
}

export interface Office {
  id: string
  city: string
  region: string
  address: string
  phone: string
  email: string
  coordinates: { x: number; y: number }
}

export interface Article {
  id: string
  title: string
  category: string
  image: string
  date: string
  excerpt: string
}

export interface Milestone {
  year: number
  event: string
}

export const projects: Project[] = [
  {
    id: "one-central-park",
    title: "One Central Park",
    location: "Sydney, Australia",
    year: 2023,
    category: "Mixed-use",
    image: "/images/project-1.jpg",
    orientation: "landscape",
    client: "Frasers Property",
    area: "68,000 sqm",
    services: ["Architecture", "Interior Design", "Landscape"],
    description: [
      "One Central Park stands as a testament to the seamless integration of nature and urban living. Rising from the heart of Sydney's Chippendale district, the building challenges conventional notions of what a mixed-use development can achieve.",
      "The design language draws from the surrounding botanical gardens, incorporating vertical gardens that cascade down the facade. These living walls are not merely decorative; they serve as functional elements that regulate temperature, improve air quality, and provide habitat for native species.",
      "Inside, the interiors reflect a restrained material palette of natural timber, raw concrete, and brushed brass. Each residential floor offers unique configurations that maximize natural light and cross-ventilation, reducing the building's reliance on mechanical systems.",
    ],
    galleryImages: ["/images/project-1.jpg", "/images/project-2.jpg", "/images/project-3.jpg", "/images/project-4.jpg"],
  },
  {
    id: "the-warehouse-hotel",
    title: "The Warehouse Hotel",
    location: "Singapore",
    year: 2022,
    category: "Hospitality",
    image: "/images/project-2.jpg",
    orientation: "portrait",
    client: "The Lo & Behold Group",
    area: "8,400 sqm",
    services: ["Architecture", "Interior Design", "Heritage Restoration"],
    description: [
      "Nestled along the historic Robertson Quay, The Warehouse Hotel is a meticulous conversion of a 19th-century godown into a luxury boutique hotel. The project demanded a delicate balance between preservation and reinvention.",
      "The original structural elements, including cast-iron columns and timber roof trusses, were carefully restored and left exposed. New interventions are deliberately minimal and contemporary, creating a dialogue between old and new that feels both respectful and bold.",
      "The hotel's 37 rooms each offer a distinct experience, with bespoke furniture pieces designed specifically for the project. The ground floor houses a restaurant and bar that have become destinations in their own right.",
    ],
    galleryImages: ["/images/project-2.jpg", "/images/project-5.jpg", "/images/project-6.jpg", "/images/project-1.jpg"],
  },
  {
    id: "learning-commons",
    title: "The Learning Commons",
    location: "Melbourne, Australia",
    year: 2024,
    category: "Education",
    image: "/images/project-3.jpg",
    orientation: "landscape",
    client: "University of Melbourne",
    area: "24,000 sqm",
    services: ["Architecture", "Interior Design", "Wayfinding"],
    description: [
      "The Learning Commons reimagines the academic library for the 21st century. Rather than a repository of books, it is conceived as a dynamic landscape of learning environments that adapt to the varied needs of students and researchers.",
      "The building is organized around a central atrium that draws natural light deep into the plan. A series of interconnected platforms at varying levels create opportunities for both focused individual study and collaborative group work.",
      "Sustainability was central to the design strategy. The building achieves a 6 Star Green Star rating through passive design principles, including natural ventilation, thermal mass, and a high-performance envelope.",
    ],
    galleryImages: ["/images/project-3.jpg", "/images/project-4.jpg", "/images/project-1.jpg", "/images/project-5.jpg"],
  },
  {
    id: "atlas-headquarters",
    title: "Atlas Headquarters",
    location: "London, United Kingdom",
    year: 2023,
    category: "Workplace",
    image: "/images/project-4.jpg",
    orientation: "portrait",
    client: "Atlas Capital Group",
    area: "42,000 sqm",
    services: ["Architecture", "Interior Design", "Workplace Strategy"],
    description: [
      "Atlas Headquarters redefines the corporate workplace for a post-pandemic world. Located in London's emerging knowledge quarter, the building was designed from the ground up to support hybrid working, collaboration, and employee wellbeing.",
      "The facade is composed of a double-skin curtain wall that provides acoustic insulation from the busy street while allowing for natural ventilation. The interstitial space between the two skins houses a series of winter gardens that serve as informal meeting spaces.",
      "Inside, the workplace is organized into neighborhoods that can be reconfigured as needs evolve. A series of connected social spaces, from a ground-floor cafe to rooftop terraces, encourage chance encounters and cross-pollination of ideas.",
    ],
    galleryImages: ["/images/project-4.jpg", "/images/project-1.jpg", "/images/project-6.jpg", "/images/project-3.jpg"],
  },
  {
    id: "the-canopy-residences",
    title: "The Canopy Residences",
    location: "Tokyo, Japan",
    year: 2024,
    category: "Mixed-use",
    image: "/images/project-5.jpg",
    orientation: "landscape",
    client: "Mitsui Fudosan",
    area: "35,000 sqm",
    services: ["Architecture", "Landscape", "Sustainability Consulting"],
    description: [
      "The Canopy Residences draw inspiration from the Japanese concept of engawa, the transitional space between interior and exterior. The project comprises 120 residences organized around a series of shared gardens that cascade down the hillside site.",
      "Each apartment is designed with deep balconies that serve as outdoor rooms, blurring the boundary between the domestic interior and the natural landscape beyond. The material palette is deliberately restrained: exposed concrete, natural timber, and handmade ceramic tiles.",
      "The landscape design is integral to the architecture, with mature trees and native planting creating a sense of established permanence from day one. Water features and stone pathways reference traditional Japanese garden design principles.",
    ],
    galleryImages: ["/images/project-5.jpg", "/images/project-2.jpg", "/images/project-3.jpg", "/images/project-6.jpg"],
  },
  {
    id: "ember-restaurant",
    title: "Ember Restaurant & Bar",
    location: "New York, USA",
    year: 2023,
    category: "Hospitality",
    image: "/images/project-6.jpg",
    orientation: "portrait",
    client: "Ember Hospitality Group",
    area: "1,200 sqm",
    services: ["Interior Design", "Lighting Design", "Bespoke Furniture"],
    description: [
      "Ember occupies a former industrial warehouse in Manhattan's Meatpacking District. The brief called for a restaurant and bar that would feel simultaneously intimate and theatrical, a space that rewards discovery and repeat visits.",
      "The design preserves the raw character of the existing building while introducing moments of refinement. Original brick walls are left exposed, while new elements including a sculptural brass bar counter and a dramatic chandelier made from hand-blown glass provide contrast.",
      "The lighting design was crucial to achieving the desired atmosphere. A layered approach combines concealed architectural lighting with decorative fixtures to create distinct zones that transition naturally from day to night.",
    ],
    galleryImages: ["/images/project-6.jpg", "/images/project-1.jpg", "/images/project-4.jpg", "/images/project-2.jpg"],
  },
]

export const teamMembers: TeamMember[] = [
  {
    id: "arjun-reddy",
    name: "Arjun Reddy",
    title: "Founding Principal",
    image: "/images/team-1.jpg",
    bio: "Arjun founded Collaborate Design and Build in 2016 with a vision to bring thoughtful, context-driven architecture to India's rapidly evolving built environment. His practice bridges traditional craft and contemporary design.",
  },
  {
    id: "priya-menon",
    name: "Priya Menon",
    title: "Design Director",
    image: "/images/team-2.jpg",
    bio: "Priya leads the design studio with a deep sensitivity to climate, material, and place. Her work draws from India's rich vernacular traditions while embracing modern spatial thinking.",
  },
  {
    id: "vikram-sharma",
    name: "Vikram Sharma",
    title: "Head of Projects",
    image: "/images/team-3.jpg",
    bio: "Vikram oversees project delivery from concept through construction, ensuring every detail is realised with the precision and care it deserves. He brings a builder's instinct to the design process.",
  },
  {
    id: "ananya-iyer",
    name: "Ananya Iyer",
    title: "Interior Design Lead",
    image: "/images/team-4.jpg",
    bio: "Ananya leads the interiors practice with a philosophy rooted in simplicity and material honesty. She believes the best spaces emerge from careful listening and restrained intervention.",
  },
]

export const offices: Office[] = [
  {
    id: "hyderabad",
    city: "Hyderabad",
    region: "India",
    address: "4th Floor, Krishe Sapphire\nHitech City, Madhapur\nHyderabad, Telangana 500081",
    phone: "+91 40 4567 8901",
    email: "hyderabad@collaboratedb.com",
    coordinates: { x: 69, y: 48 },
  },
  {
    id: "bangalore",
    city: "Bangalore",
    region: "India",
    address: "3rd Floor, Prestige Meridian\n29 MG Road, Ashok Nagar\nBangalore, Karnataka 560001",
    phone: "+91 80 2345 6789",
    email: "bangalore@collaboratedb.com",
    coordinates: { x: 68, y: 53 },
  },
]

export const articles: Article[] = [
  {
    id: "material-futures",
    title: "Material Futures: Rethinking the Building Envelope",
    category: "Research",
    image: "/images/article-1.jpg",
    date: "March 2024",
    excerpt: "Exploring how advances in material science are transforming the way we design and construct building facades.",
  },
  {
    id: "biophilic-design",
    title: "Beyond Greenwashing: Authentic Biophilic Design",
    category: "Sustainability",
    image: "/images/article-2.jpg",
    date: "January 2024",
    excerpt: "Moving past superficial greenery to create truly nature-integrated spaces that improve human wellbeing.",
  },
  {
    id: "urban-density",
    title: "The Case for Gentle Density in Urban Centres",
    category: "Urbanism",
    image: "/images/article-3.jpg",
    date: "November 2023",
    excerpt: "How mid-rise, mixed-use developments can create vibrant neighbourhoods without the downsides of high-rise living.",
  },
]

export const milestones: Milestone[] = [
  { year: 2016, event: "Arjun Reddy founds the practice in Hyderabad with a team of three" },
  { year: 2017, event: "First residential project completed in Jubilee Hills" },
  { year: 2019, event: "Bangalore studio opens on MG Road" },
  { year: 2020, event: "Awarded Indian Institute of Architects recognition for workplace design" },
  { year: 2022, event: "Team grows to 15 across both studios" },
  { year: 2024, event: "Commits to climate-responsive design across all projects" },
  { year: 2025, event: "Selected for ArchDaily India's Emerging Practice" },
]

export const navLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Ideas", href: "/#ideas" },
  { label: "Contact", href: "/#contact" },
]
