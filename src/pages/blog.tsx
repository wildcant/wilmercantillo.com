import { Box, Flex } from '@chakra-ui/layout'
import Layout from 'components/layout'
import { ComponentSizer } from 'components/styled/generic'
import { graphql, PageProps } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import BlogCard from 'src/components/blog-card'
import Search from 'src/components/search'
import { PostNode } from 'src/types'

type Props = PageProps & {
  data: {
    posts: { edges: PostNode[] }
  }
}

export default function Blog(props: Props) {
  const { posts } = props.data
  const { t } = useTranslation()
  return (
    <Layout>
      <ComponentSizer>
        <Search {...props} />
        <Box minH="70vh">
          <Flex direction="column" align="center">
            {posts.edges.map(postNode => (
              <BlogCard
                width="100%"
                key={postNode.node.id}
                size="md"
                {...postNode.node.frontmatter}
              />
            ))}
          </Flex>
        </Box>
      </ComponentSizer>
    </Layout>
  )
}

export const query = graphql`
  query BlogPage($langKey: String) {
    posts: allMdx(
      filter: { frontmatter: { lang: { eq: $langKey }, type: { eq: "post" } } }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
            readTime
            description
            banner {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
              }
            }
          }
        }
      }
    }
  }
`
