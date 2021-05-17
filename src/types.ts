import { IGatsbyImageData } from 'gatsby-plugin-image'
import { ReactNode } from 'react'

export type Image = {
  [key: string]: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
}

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
  category: string
  projectType: string
  tech: string
  keywords: string[]
  repo?: string
  projectUrl?: string
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
  social: string
  link: string
}

export type Children = {
  children: ReactNode | string | undefined
}

export interface SiteMetadata {
  siteUrl: string
  title: string
  twitterHandle: string
  description: string
  keywords?: string[] | null
  canonicalUrl: string
  image: string
  author: Author
  organization: Organization
  social: Social
}
export interface Author {
  name: string
  minibio: string
}
export interface Organization {
  name: string
  url: string
  logo: string
}
export interface Social {
  twitter: string
  fbAppID?: string
}
