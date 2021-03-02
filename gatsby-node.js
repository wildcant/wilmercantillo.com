/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const path = require('path')

exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

const blogQuery = `
  query {
    allSamplePages {
      edged {
        node {
          slug
        }
      }
    }
  }
`

exports.createPages = async ({ graphql, actions }) => {
  const { createPages } = actions
  blogPost = path.resolve(`src/templates/blog-post.js`)
  const result = await graphql(blogQuery)
}
