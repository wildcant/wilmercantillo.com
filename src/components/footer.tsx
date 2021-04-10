import { useColorMode } from '@chakra-ui/color-mode'
import Icon from '@chakra-ui/icon'
import { Box, Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/layout'
import { Link as CLink } from '@chakra-ui/react'
import VisuallyHidden from '@chakra-ui/visually-hidden'
import { graphql, useStaticQuery } from 'gatsby'
import Logo from 'images/svg/logo.svg'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { SiFreelancer } from 'react-icons/si'
import { PostNode } from 'src/types'
import Link from './link'
import { ComponentSizer } from './styled/generic'

const outstandingPostQuery = graphql`
  query Footer($langKey: String) {
    outstandingPost: allMdx(
      filter: {
        frontmatter: {
          lang: { eq: $langKey }
          type: { eq: "post" }
          outstanding: { eq: true }
        }
      }
      limit: 1
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
          }
        }
      }
    }
  }
`

type QueryResponse = {
  outstandingPost: {
    edges: PostNode[]
  }
}

export default function Footer() {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'
  const data: QueryResponse = useStaticQuery(outstandingPostQuery)

  const post = data.outstandingPost.edges[0].node.frontmatter

  return (
    <Box as="footer" borderTop="1px" borderColor="gray.200">
      <ComponentSizer>
        <Grid gridTemplateColumns={{ md: '10% 40% 50%' }}>
          <GridItem>
            <Link to="/">
              <Box
                margin="1rem 0 2rem 0"
                color={isLight ? 'primary.500' : 'purple.500'}
              >
                <VisuallyHidden>Logo</VisuallyHidden>
                <Logo />
              </Box>
            </Link>
          </GridItem>
          {post && (
            <GridItem>
              <Flex direction="column" margin="1rem 0" maxW="24rem">
                <Heading as="h3" size="sm">
                  {t('footer.outstandingPost')}
                </Heading>
                <Heading size="md">{post.title}</Heading>
                <Text noOfLines={3}>{post.description}</Text>
                <Flex width="100%" justify="space-between">
                  <Text as="span" fontWeight="light" color="gray.600">
                    {post.date} · {post.readTime} min
                  </Text>
                  <Box>
                    <Link to={`/post/${post.slug}`}>
                      <Text color="gray.700" textTransform="uppercase">
                        {t('footer.readMore')}
                      </Text>
                    </Link>
                  </Box>
                </Flex>
              </Flex>
            </GridItem>
          )}
          <GridItem>
            <Flex direction="column" justify="space-between">
              <Flex direction={['column', 'row']}>
                <Box margin="1rem 0">
                  <Heading size="md">{t('footer.keepConnected')}</Heading>
                  <CLink href="https://github.com/CwirL" target="_blank">
                    <Flex align="center" marginTop="0.5rem">
                      <Icon as={FaGithub} marginRight="1rem" />
                      <Text>Github</Text>
                    </Flex>
                  </CLink>
                  <CLink
                    href="https://www.linkedin.com/in/wilmer-cantillo-9a19b4171/"
                    target="_blank"
                  >
                    <Flex align="center" marginTop="0.5rem">
                      <Icon as={FaLinkedin} marginRight="1rem" />
                      <Text>LinkedIn</Text>
                    </Flex>
                  </CLink>
                  <CLink
                    href="https://www.freelancer.com/u/CwirL"
                    target="_blank"
                  >
                    <Flex align="center" marginTop="0.5rem">
                      <Icon as={SiFreelancer} marginRight="1rem" />
                      <Text>Freelancer</Text>
                    </Flex>
                  </CLink>
                </Box>
                <Box margin={['1rem 0', '1rem 2rem']}>
                  <Heading size="md">{t('footer.getInspired')}</Heading>
                  <Link to="/blog">
                    <Flex align="center" marginTop="0.5rem">
                      <Text>{t('header.blog')}</Text>
                    </Flex>
                  </Link>
                  <Link to="/resources">
                    <Flex align="center" marginTop="0.5rem">
                      <Text>{t('header.res')}</Text>
                    </Flex>
                  </Link>
                </Box>
              </Flex>
              <Text>{t('footer.copyright')}</Text>
            </Flex>
          </GridItem>
        </Grid>
      </ComponentSizer>
    </Box>
  )
}
