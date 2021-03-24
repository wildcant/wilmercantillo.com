import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import { Badge, Box, Flex, Link, Text } from '@chakra-ui/layout'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BlogPost, Children } from 'src/types'
import { components } from '.'
import Headings from './headings'
import { PostSizer } from './styled'

const BlogPostLayout = (props: BlogPost & Children) => {
  return (
    <Box as="main" marginTop="10vh">
      <PostSizer>
        <Headings.H2>{props.title}</Headings.H2>
        <Flex justify="space-between" alignItems="center">
          <Flex>
            <Text as="span" fontWeight="light" color="gray.600">
              {props.date}{' '}
              {props.readTime ? <span>· {props.readTime} min</span> : ''}
            </Text>
          </Flex>

          <Flex>
            <Link href="https://github.com/CwirL" target="_blank">
              <IconButton
                aria-label="Facebook Link"
                icon={<Icon as={FaGithub} />}
              />
            </Link>
            <Link
              href="https://www.linkedin.com/in/wilmer-cantillo-9a19b4171/"
              target="_blank"
            >
              <IconButton
                aria-label="LinkedIn Link"
                icon={<Icon as={FaLinkedin} />}
              />
            </Link>
          </Flex>
        </Flex>

        <Box>
          {props.banner && (
            <GatsbyImage
              image={props.banner.childImageSharp.gatsbyImageData}
              alt="Post Banner"
            />
          )}
        </Box>

        <Flex margin="1rem 0" flexWrap="wrap">
          {props.categories?.map(category => (
            <Badge
              key={category}
              variant="solid"
              backgroundColor="gray.100"
              color="gray.500"
              marginRight="1rem"
              textTransform="capitalize"
            >
              {category}
            </Badge>
          ))}
        </Flex>

        <MDXProvider components={components}>{props.children}</MDXProvider>

        <Flex justify="flex-end">
          <Link href="https://github.com/CwirL" target="_blank">
            <IconButton
              aria-label="Facebook Link"
              icon={<Icon as={FaGithub} />}
            />
          </Link>
          <Link
            href="https://www.linkedin.com/in/wilmer-cantillo-9a19b4171/"
            target="_blank"
          >
            <IconButton
              aria-label="LinkedIn Link"
              icon={<Icon as={FaLinkedin} />}
            />
          </Link>
        </Flex>
      </PostSizer>
    </Box>
  )
}

export default BlogPostLayout
