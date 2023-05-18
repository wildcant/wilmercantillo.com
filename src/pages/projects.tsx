import { Box, Flex, Heading } from '@chakra-ui/layout'
import { graphql, PageProps } from 'gatsby'
import { useTranslation } from 'react-i18next'
import Layout from 'src/components/layout'
import ProjectCard from 'src/components/project-card'
import { ComponentSizer } from 'src/components/styled/generic'
import { ProjectNode } from 'src/types'
import React from 'react'

type Props = PageProps & {
  data: {
    projects: { edges: ProjectNode[] }
  }
}

export default function Projects(props: Props) {
  const { projects } = props.data
  console.log({ projects })
  const { t } = useTranslation()
  return (
    <Layout title={t('projects.metaTitle')} pathname={props.location.pathname}>
      <ComponentSizer>
        <Heading textAlign="center">{t('projects.title')}</Heading>
        <Flex
          direction={{ base: 'column', md: 'row' }}
          wrap="wrap"
          marginTop="2rem"
        >
          {projects.edges.map(
            (project, idx) =>
                <Flex
                  key={idx}
                  justify="center"
                  position="relative"
                  width={{ base: '100%', md: '50%' }}
                  marginTop={idx % 2 !== 0 ? '3rem' : ''}
                >
                  <Box>
                    <ProjectCard
                      {...project.node.frontmatter}
                      seeMoreLabel={t('blog.seeMore')}
                    />
                  </Box>
                </Flex>
          )}
        </Flex>
      </ComponentSizer>
    </Layout>
  )
}

export const query = graphql`
  query ProjectsPage($langKey: String) {
    projects: allMdx(
      filter: {
        frontmatter: { lang: { eq: $langKey }, type: { eq: "project" } }
      }
      sort: { order: DESC, fields: frontmatter___date }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            date
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
