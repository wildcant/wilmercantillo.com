import React from 'react'
import { Author, Organization } from 'src/types'

type SchemaOrgProps = {
  author?: Author
  canonicalUrl?: string
  datePublished?: string
  defaultTitle?: string
  description?: string
  image?: string
  isPost?: boolean
  organization?: Organization
  title?: string
  url?: string
}

export function SchemaOrg({
  author,
  canonicalUrl,
  datePublished,
  defaultTitle,
  description,
  image,
  isPost,
  organization,
  title,
  url,
}: SchemaOrgProps) {
  const baseSchema = [
    {
      '@context': 'http://schema.org',
      '@type': 'WebSite',
      url,
      name: title,
      alternateName: defaultTitle,
    },
  ]
  const schema = isPost
    ? [
        ...baseSchema,
        {
          '@context': 'http://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            {
              '@type': 'ListItem',
              position: 1,
              item: {
                '@id': url,
                name: title,
                image,
              },
            },
          ],
        },
        {
          '@context': 'http://schema.org',
          '@type': 'BlogPosting',
          url,
          name: title,
          alternateName: defaultTitle,
          headline: title,
          image: {
            '@type': 'ImageObject',
            url: image,
          },
          description,
          author: {
            '@type': 'Person',
            name: author?.name,
          },
          publisher: {
            '@type': 'Organization',
            url: organization?.url,
            logo: organization?.logo,
            name: organization?.name,
          },
          mainEntityOfPage: {
            '@type': 'WebSite',
            '@id': canonicalUrl,
          },
          datePublished,
        },
      ]
    : baseSchema

  return <script type="application/ld+json">{JSON.stringify(schema)}</script>
}
