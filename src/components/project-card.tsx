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
  ...props
}: Props) => (
  <Flex
    boxShadow="md"
    direction="column"
    w={{ base: '100%', lg: '24rem' }}
    maxW={{ base: '20rem', lg: 'unset' }}
    h={{ base: '100%', lg: '28rem' }}
    maxH={{ base: '350px', lg: 'unset' }}
    margin="0.5rem 0"
    _hover={{
      boxShadow: 'lg',
    }}
    {...props}
  >
    <Box h="65%" overflow="hidden">
      <Link to="/projects">
        <Box h="100%">
          <GatsbyImage
            image={banner.childImageSharp.gatsbyImageData}
            alt="project image"
            objectFit="cover"
          />
        </Box>
      </Link>
    </Box>
    <Box h="35%" padding="1rem">
      <Flex direction="column" h="100%" justify="space-between">
        <Link to="/projects">
          <Heading as="h3" size="sm">
            {title}
          </Heading>
          <Text noOfLines={2}>{description}</Text>
        </Link>
        <Link to="/projects">
          <Text textTransform="uppercase">{seeMoreLabel}</Text>
        </Link>
      </Flex>
    </Box>
  </Flex>
)

export default ProjectCard
