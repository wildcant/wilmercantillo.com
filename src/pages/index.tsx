import {
  Box,
  Button,
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
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Electronics from 'images/svg/electronics.svg'
import Software from 'images/svg/software.svg'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa'
import { TiArrowDownThick } from 'react-icons/ti'
import { useLocalStorage } from 'react-use'
import BounceAnimation from 'src/components/animations/bounce'
import BlogCard from 'src/components/blog-card'
import SectionContent from 'src/components/landing-section'
import Link from 'src/components/link'
import ProjectCard from 'src/components/project-card'
import Quotes from 'src/components/quotes'
import { ComponentSizer } from 'src/components/styled/generic'
import { Image, PostNode, ProjectNode, Quote } from 'src/types'

type Props = PageProps & {
  data: Image & {
    featuredPosts: {
      edges: PostNode[]
    }
    featuredProjects: {
      edges: ProjectNode[]
    }
  }
}

export default function IndexPage(props: Props) {
  const {
    personImg,
    personSittingImg,
    featuredPosts,
    featuredProjects,
  } = props.data

  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const blogCardSize = useBreakpointValue({ base: 'sm', md: 'lg' }) || 'sm'
  const [landingLoaded, setLandingLoaded] = useLocalStorage('landing-loaded')
  const [loaded, setLoaded] = useState(false)

  const isLight = colorMode === 'light'
  const introImage = getImage(personImg.childImageSharp.gatsbyImageData)
  const blogImage = getImage(personSittingImg.childImageSharp.gatsbyImageData)
  const quotes: Array<Quote> = t('home.quotes', { returnObjects: true })

  useEffect(() => {
    if (landingLoaded) {
      setLoaded(true)
    } else {
      setLandingLoaded(true)
    }
  }, [])

  return (
    <Layout title={t('home.metaTitle')}>
      {/* Home Section */}
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
            visibility={{ base: 'hidden', sm: 'visible' }}
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
              buttonLink="/about"
              animate={!loaded}
            />
          </Box>
        </Box>
      </ComponentSizer>
      {/* Blog Section */}
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
                buttonLink="/blog"
                animate={!loaded}
              />
            </GridItem>
            <GridItem
              gridColumn={{ md: '2' }}
              gridRow={{ md: '2 / span 3' }}
              width="100%"
            >
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
                    width="100%"
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
      {/* Contact Section */}
      <ComponentSizer
        h="100vh"
        minH={{ base: '400px', sm: '600px' }}
        maxH={{ base: '700px' }}
        pos="relative"
      >
        <Box as="section" height="100%">
          <Grid height="100%" gridTemplateRows="70% 30%">
            <Flex direction={{ base: 'column', md: 'row' }}>
              <Flex
                w={{ md: '50%' }}
                height="100%"
                direction="column"
                justify="space-around"
              >
                <Flex marginY="2">
                  <Flex as="p" w="50%" align="center" justify="center">
                    <Text as="span" fontSize="6xl">
                      {t('home.contact.years')}
                    </Text>
                    <Text as="small" w="5rem">
                      {t('home.contact.yearsExperience')}
                    </Text>
                  </Flex>
                  <Flex as="p" w="50%" align="center" justify="center">
                    <Text as="span" fontSize="6xl">
                      {t('home.contact.clients')}
                    </Text>
                    <Text as="small" w="5rem">
                      {t('home.contact.satisfiedClients')}
                    </Text>
                  </Flex>
                </Flex>
                <Box mb="1.5rem">
                  <Text fontSize={{ md: '1.4rem', lg: '1.6rem' }}>
                    <Icon as={FaQuoteLeft} fontSize="0.6em" color="gray.200" />
                    {t('home.contact.quote')}
                    <Icon as={FaQuoteRight} fontSize="0.6em" color="gray.200" />
                  </Text>
                  <Text
                    as="small"
                    d="block"
                    textAlign="right"
                    color="gray.600"
                    pr={{ md: '2rem' }}
                  >
                    - {t('home.contact.quoteAuthor')}
                  </Text>
                </Box>
              </Flex>
              <SectionContent
                w={{ md: '50%' }}
                name={t('home.contact.name')}
                title={t('home.contact.title')}
                description={t('home.contact.description')}
                buttonText={t('home.contact.buttonText')}
                buttonLink="/contact"
                animate={!loaded}
              />
            </Flex>
            <Flex justify="space-around">
              <Box w="40%">
                <Link to="/projects?category=software">
                  <Box
                    boxShadow="md"
                    padding="1rem"
                    d={{ md: 'flex' }}
                    alignItems={{ md: 'center' }}
                    justifyContent={{ md: 'center' }}
                    height={{ md: '8rem' }}
                  >
                    <Box color={isLight ? 'primary.500' : 'purple.500'}>
                      <Software width={56} height={56} className="inline" />
                    </Box>
                    <Box pl={{ md: '1rem' }}>
                      <Text fontSize={{ md: '1.4rem', lg: '1.6rem' }}>
                        {t('home.contact.softwareLabel')}
                      </Text>
                      {/* TODO - make query and replace with dynamic data */}
                      <Text as="small">7 {t('home.contact.projects')}</Text>
                    </Box>
                  </Box>
                </Link>
              </Box>
              <Box w="40%">
                <Link to="/projects?category=electronics">
                  <Box
                    boxShadow="md"
                    padding="1rem"
                    d={{ md: 'flex' }}
                    alignItems={{ md: 'center' }}
                    justifyContent={{ md: 'center' }}
                    height={{ md: '8rem' }}
                  >
                    <Box color={isLight ? 'primary.500' : 'purple.500'}>
                      <Electronics width={56} height={56} className="inline" />
                    </Box>
                    <Box pl={{ md: '1rem' }}>
                      <Text fontSize={{ md: '1.4rem', lg: '1.6rem' }}>
                        {t('home.contact.electronicsLabel')}
                      </Text>
                      <Text as="small">2 {t('home.contact.projects')}</Text>
                    </Box>
                  </Box>
                </Link>
              </Box>
            </Flex>
          </Grid>
        </Box>
      </ComponentSizer>
      {/* Projects Section */}
      <ComponentSizer
        h="100vh"
        minH={{ base: '400px', sm: '600px' }}
        maxH={{ base: '700px' }}
        pos="relative"
      >
        <Grid
          as="section"
          height="100%"
          gridTemplateColumns={{ md: '50% 50%' }}
        >
          <GridItem>
            <SectionContent
              name={t('home.projects.name')}
              title={t('home.projects.title')}
              description={t('home.projects.description')}
              animate={!loaded}
            />
            <ProjectCard
              seeMoreLabel={t('home.projects.seeMore')}
              {...featuredProjects.edges[0].node.frontmatter}
            />
          </GridItem>
          <GridItem
            d={{ md: 'flex' }}
            flexDir={{ md: 'column' }}
            justifyContent={{ md: 'space-around' }}
          >
            <ProjectCard
              d={{ base: 'none', md: 'block' }}
              seeMoreLabel={t('home.projects.seeMore')}
              {...featuredProjects.edges[1].node.frontmatter}
            />
            <Link to="/projects">
              <Button
                variant="solid"
                m={{ base: '0 0 1rem 0', md: '1rem 0' }}
                maxW={{ md: '200px' }}
              >
                {t('home.projects.buttonText')}
              </Button>
            </Link>
          </GridItem>
        </Grid>
      </ComponentSizer>
      {/*  Testimonials Section */}
      <ComponentSizer
        h={{ base: '50vh', md: '40vh' }}
        minH={{ base: '200px', sm: '300px' }}
        maxH={{ base: '600px' }}
        pos="relative"
      >
        <Box as="section" height="100%">
          <SectionContent
            name={t('home.testimonials.name')}
            title={t('home.testimonials.title')}
            description={t('home.testimonials.description')}
            animate={!loaded}
          />
          <Icon as={FaQuoteLeft} fontSize="2em" color="gray.200" />
          <Quotes quotes={quotes} />
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
      filter: { frontmatter: { lang: { eq: $langKey }, type: { eq: "post" } } }
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
    featuredProjects: allMdx(
      filter: {
        frontmatter: {
          lang: { eq: $langKey }
          type: { eq: "project" }
          featured: { eq: true }
        }
      }
      limit: 2
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
