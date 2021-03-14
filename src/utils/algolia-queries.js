const escapeStringRegexp = require('escape-string-regexp')
const util = require('util')

const esIndexName = 'BLOG_es'
const enIndexName = 'BLOG_en'

const esBlogPostsQuery = `{
  blogPosts: allMdx(filter: {frontmatter: {lang: {eq: "es"}, type: {eq: "post"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          date
          readTime
          description
          categories
          banner {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}`

const enBlogPostsQuery = `{
  blogPosts: allMdx(filter: {frontmatter: {lang: {eq: "en"}, type: {eq: "post"}}}) {
    edges {
      node {
        id
        frontmatter {
          title
          slug
          date
          readTime
          description
          categories
          banner {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
}`

function pageToAlgoliaRecord({ id, frontmatter }) {
  return {
    objectID: id,
    ...frontmatter,
  }
}

const queries = [
  {
    query: esBlogPostsQuery,
    transformer: ({ data }) =>
      data.blogPosts.edges.map(({ node }) => pageToAlgoliaRecord(node)),
    indexName: esIndexName,
    settings: {
      searchableAttributes: ['title', 'description'],
      attributesForFaceting: ['categories'],
      replicas: [
        `virtual(${esBlogPostsQuery}_date_asc)`,
        `virtual(${esBlogPostsQuery}_date_desc)`,
      ],
      replicaUpdateMode: 'merge',
    },
  },
  {
    query: enBlogPostsQuery,
    transformer: ({ data }) =>
      data.blogPosts.edges.map(({ node }) => pageToAlgoliaRecord(node)),
    indexName: enIndexName,
    settings: {
      searchableAttributes: ['title', 'description'],
      attributesForFaceting: ['categories'],
      replicas: [
        `virtual(${enBlogPostsQuery}_date_asc)`,
        `virtual(${enBlogPostsQuery}_date_desc)`,
      ],
      replicaUpdateMode: 'merge',
    },
  },
]
// Settings reference: https://www.algolia.com/doc/api-reference/settings-api-parameters/
// Sort with virtual replicas approach: https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-by-attribute/
// Configuring virtual replicas: https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/how-to/sort-an-index-by-date/
// More info on sort: - https://www.algolia.com/doc/guides/managing-results/refine-results/sorting/in-depth/exhaustive-sort/

module.exports = queries
