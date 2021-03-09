import { useColorMode } from '@chakra-ui/color-mode'
import { Box, BoxProps, Flex, Heading, Text } from '@chakra-ui/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { BlogPost } from 'src/types'
import Link from './link'

type BlogCardProps = BoxProps &
  BlogPost & {
    size: string | 'sm' | 'md' | 'lg'
  }

export default function BlogCard({ size, ...props }: BlogCardProps) {
  const { colorMode } = useColorMode()
  const isLightMode = colorMode === 'light'

  switch (size) {
    case 'lg':
      return <LargeBlogCard isLight={isLightMode} {...props} />
    case 'sm':
      return <SmallBlogCard isLight={isLightMode} {...props} />
    case 'md':
    default:
      return <MediumBlogCard isLight={isLightMode} {...props} />
  }
}

type Props = BlogPost & {
  isLight: boolean
}

const SmallBlogCard = (props: Props) => (
  <Box width="100%">
    <Link to={`/post/${props.slug}`}>
      <Flex p="2" minH="6rem" boxShadow="xs" width={['100%']} minW="250px">
        <Flex width="65%" direction="column" justify="space-between">
          <Heading
            as="h3"
            size="sm"
            noOfLines={2}
            _hover={{ color: props.isLight ? 'primary.500' : 'purple.500' }}
          >
            {props.title}
          </Heading>
          <Text as="span" fontWeight="light" color="gray.600">
            {props.date} · {props.readTime} min
          </Text>
        </Flex>
        <Flex width="35%" align="center">
          <Box width="100%" height="auto">
            <GatsbyImage
              image={props.banner.childImageSharp.gatsbyImageData}
              alt="Blog post feature image"
            />
          </Box>
        </Flex>
      </Flex>
    </Link>
  </Box>
)

const MediumBlogCard = (props: Props) => (
  <Flex
    p="2"
    boxShadow="xs"
    width="100%"
    minW="250px"
    maxW="650px"
    h={{ base: '120px', md: '140px' }}
    minH="6rem"
    margin="1rem 0"
    _hover={{
      boxShadow: 'lg',
    }}
  >
    <Flex width="65%" direction="column" justify="space-between">
      <Box>
        <Link to={`/post/${props.slug}`}>
          <Heading
            as="h3"
            size="sm"
            _hover={{ color: props.isLight ? 'primary.500' : 'purple.500' }}
          >
            {props.title}
          </Heading>
        </Link>
        <Link to={`/post/${props.slug}`}>
          <Text noOfLines={{ base: 2, md: 3 }} paddingRight={{ md: '1rem' }}>
            {props.description}
          </Text>
        </Link>
      </Box>
      <Text as="span" fontWeight="light" color="gray.600">
        {props.date} · {props.readTime} min
      </Text>
    </Flex>
    <Flex width="35%" align="center">
      <Box width="100%" height="100%" overflow="hidden">
        <Link to={`/post/${props.slug}`}>
          <Box height="100%">
            <GatsbyImage
              image={props.banner.childImageSharp.gatsbyImageData}
              alt="Blog post feature image"
              objectFit="cover"
            />
          </Box>
        </Link>
      </Box>
    </Flex>
  </Flex>
)

const LargeBlogCard = (props: Props) => (
  <Box>
    <div>LargeBlogCard</div>
  </Box>
)
