import { IGatsbyImageData } from 'gatsby-plugin-image'

export type BlogPost = {
  lang: string
  slug: string
  title: string
  date: string
  author: string
  description: string
  categories: string[]
  keywords: string[]
  banner: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  bannerCredit: string
  readTime: string
}

export type PostNode = {
  node: {
    id: string
    frontmatter: BlogPost
  }
}

export type ProjectPost = {
  lang: string
  slug: string
  title: string
  date: string
  author: string
  description: string
  categories: string[]
  keywords: string[]
  banner: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
  bannerCredit: string
  featured?: boolean
}

export type ProjectNode = {
  node: {
    id: string
    frontmatter: ProjectPost
  }
}

export type Quote = {
  id: string
  text: string
  author: string
  occupation: string
}
