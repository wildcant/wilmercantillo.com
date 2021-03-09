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
    minH="6rem"
    boxShadow="xs"
    width="100%"
    minW="250px"
    maxW="550px"
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
          <Text noOfLines={3}>{props.description}</Text>
        </Link>
      </Box>
      <Text as="span" fontWeight="light" color="gray.600">
        {props.date} · {props.readTime} min
      </Text>
    </Flex>
    <Box width="35%">
      <Link to={`/post/${props.slug}`}>
        <Flex align="center">
          <Box width="100%" height="auto">
            <GatsbyImage
              image={props.banner.childImageSharp.gatsbyImageData}
              alt="Blog post feature image"
            />
          </Box>
        </Flex>
      </Link>
    </Box>
  </Flex>
)

const LargeBlogCard = (props: Props) => (
  <Box>
    <div>LargeBlogCard</div>
  </Box>
)
