import { Box, Flex, FlexProps, Heading, Text } from '@chakra-ui/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { ProjectPost } from 'src/types'
import Link from './link'

type Props = ProjectPost &
  FlexProps & {
    seeMoreLabel: string
  }

const ProjectCard = ({
  banner,
  title,
  description,
  seeMoreLabel,
  slug,
  ...props
}: Props) => (
  <Flex
    direction="column"
    w={{ base: '100%', lg: '24rem' }}
    maxW={{ base: '20rem', lg: 'unset' }}
    h={{ base: '100%', lg: '28rem' }}
    maxH={{ base: '350px', lg: 'unset' }}
    margin="0.5rem 0"
    transition="background .3s,box-shadow .3s ease"
    boxShadow="xs"
    borderRadius="6px"
    _hover={{
      boxShadow: '2xl',
    }}
    {...props}
  >
    <Box h={{ base: '55%', md: '65%' }} overflow="hidden" borderRadius="6px">
      <Link to={`/project/${slug}`}>
        <Box h="100%">
          <GatsbyImage
            image={banner.childImageSharp.gatsbyImageData}
            alt="project image"
            objectFit="cover"
          />
        </Box>
      </Link>
    </Box>
    <Box h={{ base: '45%', md: '35%' }} padding="1rem">
      <Flex direction="column" h="100%" justify="space-between">
        <Link to={`/project/${slug}`}>
          <Heading as="h3" size="sm">
            {title}
          </Heading>
          <Text noOfLines={2}>{description}</Text>
        </Link>
        <Link to={`/project/${slug}`}>
          <Text textTransform="uppercase">{seeMoreLabel}</Text>
        </Link>
      </Flex>
    </Box>
  </Flex>
)

export default ProjectCard
