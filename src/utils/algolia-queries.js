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
    attributesForFaceting: ['categories'],
  },
  {
    query: enBlogPostsQuery,
    transformer: ({ data }) =>
      data.blogPosts.edges.map(({ node }) => pageToAlgoliaRecord(node)),
    indexName: enIndexName,
    attributesForFaceting: ['categories'],
  },
]

module.exports = queries
