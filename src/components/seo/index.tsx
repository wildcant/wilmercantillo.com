import { graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import { Helmet } from 'react-helmet'
import { BlogPost, ProjectPost, SiteMetadata } from 'src/types'
import defaultMetaImage from '../../../static/images/placeholder.png'
import { SchemaOrg } from './schema-org'

export type SEOProps = {
  title?: string
  description?: string
  image?: string
  url?: string
  metaImage?: string
  siteMetadata?: SiteMetadata
  post?: BlogPost | ProjectPost
  datePublished?: string
  isPost?: boolean
}

export const SEO = ({
  metaImage,
  post,
  isPost,
  siteMetadata: siteMeta,
  title = post?.title ?? siteMeta?.title,
  description = post?.description ?? siteMeta?.description,
  image = metaImage ?? defaultMetaImage,
  url = post?.slug
    ? siteMeta?.canonicalUrl + post.slug
    : siteMeta?.canonicalUrl,
  datePublished = post?.date,
}: SEOProps) => {
  return (
    <Helmet>
      {/* General tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="image" content={image} />

      {/* OpenGraph tags */}
      <meta name="og:" content={url} />
      {isPost && <meta name="og:" content="article" />}
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image:" content={image} />

      {/* Twitter Card tags */}
      <meta name="twitter:card" content="summary_large_image" />
      {/* TODO - Add twitter account url to config and update query */}
      <meta name="twitter:creator" content={siteMeta?.social?.twitter} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <SchemaOrg
        isPost={isPost}
        url={url}
        title={title}
        image={image}
        description={description}
        datePublished={datePublished}
        canonicalUrl={siteMeta?.canonicalUrl}
        author={siteMeta?.author}
        organization={siteMeta?.organization}
        defaultTitle={siteMeta?.title}
      />
    </Helmet>
  )
}

type SEOWithQuery = Omit<SEOProps, 'siteMetadata'>

export function SEOWithQuery(props: SEOWithQuery) {
  const {
    site: { siteMetadata },
  } = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          canonicalUrl
          image
          author {
            name
          }
          organization {
            name
            url
            logo
          }
          social {
            github
            linkedin
          }
        }
      }
    }
  `)
  return <SEO siteMetadata={siteMetadata} {...props} />
}
