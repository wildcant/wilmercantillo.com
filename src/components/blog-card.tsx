import { Box, BoxProps, Flex, Heading, Text } from '@chakra-ui/layout'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { BlogPost } from 'src/types'
import Link from './link'

type Props = BoxProps & BlogPost
type BlogCardProps = Props & {
  size: 'sm' | 'md' | 'lg'
}

export default function BlogCard({ size, ...props }: BlogCardProps) {
  switch (size) {
    case 'sm':
      return <SmallBlogCard {...props} />
    case 'lg':
      return <LargeBlogCard {...props} />
    case 'md':
      return <MediumBlogCard {...props} />
  }
}

const SmallBlogCard = (props: BlogPost) => {
  return (
    <Link to={`/posts/${props.slug}`}>
      <Flex
        p="2"
        minH="6rem"
        boxShadow="xs"
        width={['100%', 'md']}
        minW="300px"
      >
        <Flex width="65%" direction="column" justify="space-between">
          <Heading as="h3" size="sm" _hover={{ color: 'primary.500' }}>
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
  )
}

const MediumBlogCard = (props: BlogPost) => (
  <Box>
    <div>MediumBlogCard</div>
  </Box>
)

const LargeBlogCard = (props: BlogPost) => (
  <Box>
    <div>LargeBlogCard</div>
  </Box>
)
