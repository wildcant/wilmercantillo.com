import {
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Icon,
  Text,
  useBreakpointValue,
  useColorMode,
} from '@chakra-ui/react'
import Layout from 'components/layout'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { TiArrowDownThick } from 'react-icons/ti'
import BounceAnimation from 'src/components/animations/bounce'
import BlogCard from 'src/components/blog-card'
import SectionContent from 'src/components/landing-section'
import { ComponentSizer } from 'src/components/styled/generic'
import { BlogPost } from 'src/types'

type PostNode = {
  node: {
    id: string
    frontmatter: BlogPost
  }
}

type Props = PageProps & {
  data: {
    personImg: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    personSittingImg: { childImageSharp: { gatsbyImageData: IGatsbyImageData } }
    featuredPosts: {
      edges: PostNode[]
    }
  }
}

export default function IndexPage(props: Props) {
  const { personImg, personSittingImg, featuredPosts } = props.data
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const blogCardSize = useBreakpointValue({ base: 'sm', md: 'md' }) || 'sm'

  const isLight = colorMode === 'light'
  const introImage = getImage(personImg.childImageSharp.gatsbyImageData)
  const blogImage = getImage(personSittingImg.childImageSharp.gatsbyImageData)
  console.log({ featuredPosts })
  return (
    <Layout>
      <ComponentSizer
        h="90vh"
        minH={{ base: '400px', lg: '600px' }}
        maxH={{ base: '650px' }}
        pos="relative"
      >
        <Box
          as="section"
          d={{ md: 'flex' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Heading
            fontFamily="Rouge Script"
            fontWeight="normal"
            color={isLight ? '#1D3557' : 'gray.400'}
            fontSize={['5xl', '7xl', '8xl', '9xl']}
            textAlign={['center', 'left']}
            width={{ md: '42%' }}
          >
            {t('home.myName')}
          </Heading>
          <Box
            position="absolute"
            bottom="0px"
            width={{ base: '200px', md: '300px', lg: '400px' }}
            height="auto"
            right={{ base: '0', md: '50%', lg: '40%' }}
            transform={{ md: 'scaleX(-1)' }}
          >
            {introImage && <GatsbyImage image={introImage} alt="Person" />}
          </Box>
          <Box width={{ md: '50%' }}>
            <SectionContent
              name={t('home.intro.name')}
              title={t('home.intro.title')}
              description={t('home.intro.description')}
              buttonText={t('home.intro.buttonText')}
            />
          </Box>
        </Box>
      </ComponentSizer>
      <ComponentSizer
        h="100vh"
        minH={{ base: '400px', sm: '640px' }}
        maxH={{ base: '700px' }}
        pos="relative"
      >
        <Box as="section" height="100%">
          <Box
            position="absolute"
            bottom="10%"
            width={{ base: '0', md: '200px', lg: '300px' }}
            height="auto"
            left="0"
            transform={{ md: 'scaleX(-1)' }}
          >
            {blogImage && (
              <GatsbyImage image={blogImage} alt="Person sitting" />
            )}
          </Box>
          <Grid
            h={{ base: 'calc(100% - 4rem)' }}
            templateColumns={{ md: '50% 50%' }}
            templateRows={{
              base: '60% 40%',
              sm: '50% 50%',
              md: 'repeat(4, 25%)',
            }}
          >
            <GridItem gridRow={{ md: '1 / span 2' }}>
              <SectionContent
                name={t('home.blog.name')}
                title={t('home.blog.title')}
                description={t('home.blog.description')}
                buttonText={t('home.blog.buttonText')}
              />
            </GridItem>
            <GridItem gridColumn={{ md: '2' }} gridRow={{ md: '2 / span 3' }}>
              <Heading as="h3" size="md">
                {t('home.blog.latestPosts')}
              </Heading>
              <Flex
                direction="column"
                width="100%"
                height="100%"
                alignItems={{ base: 'center', md: 'flex-start' }}
              >
                {featuredPosts.edges.map(postNode => (
                  <BlogCard
                    key={postNode.node.id}
                    size={blogCardSize}
                    {...postNode.node.frontmatter}
                  />
                ))}
              </Flex>
            </GridItem>
          </Grid>
          <Flex height={{ base: '4rem' }} direction="column" align="center">
            <Text>{t('home.blog.messageOne')}</Text>
            <Text>{t('home.blog.messageTwo')}</Text>
            <BounceAnimation>
              <Icon as={TiArrowDownThick} />
            </BounceAnimation>
          </Flex>
        </Box>
      </ComponentSizer>
    </Layout>
  )
}
export const query = graphql`
  query LandingPage($langKey: String) {
    personImg: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
    personSittingImg: file(relativePath: { eq: "person-sitting.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: TRACED_SVG)
      }
    }
    featuredPosts: allMdx(
      filter: { frontmatter: { lang: { eq: $langKey } } }
      sort: { order: DESC, fields: frontmatter___date }
      limit: 2
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
