import { IconButton } from '@chakra-ui/button'
import Icon from '@chakra-ui/icon'
import {
  Badge,
  Box,
  Flex,
  Link as CLink,
  Stack,
  Text as CText,
} from '@chakra-ui/layout'
import { MDXProvider, MDXProviderComponents } from '@mdx-js/react'
import { PageProps } from 'gatsby'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { BlogPost, Image, ProjectPost } from 'src/types'
import Footer from '../footer'
import Header from '../header'
import Headings from './headings'
import { PostSizer } from './styled'
import Text from './text'

const components: MDXProviderComponents = {
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
  p: Text.Paragraph,
}

type Props = PageProps & {
  data: Image
  pageContext: {
    frontmatter: BlogPost &
      ProjectPost & {
        type: 'project' | 'post'
      }
  }
}

export default function MdLayout(props: Props) {
  const post = props.pageContext.frontmatter
  const banner = props.data?.banner
  return (
    <>
      <Header />
      <Box as="main" marginTop="10vh">
        <PostSizer>
          <Headings.H1>{post.title}</Headings.H1>
          <Stack direction="row" margin="1rem 0">
            {post.categories?.map(category => (
              <Badge key={category} variant="solid" colorScheme="gray">
                {category}
              </Badge>
            ))}
          </Stack>
          <Box margin="1rem 0">
            {banner && (
              <GatsbyImage
                image={banner.childImageSharp.gatsbyImageData}
                alt="Post Banner"
              />
            )}
          </Box>
          <Flex direction="row" justify="flex-end">
            <CText as="span" fontWeight="light" color="gray.600">
              {post.date}{' '}
              {post.readTime ? <span>· {post.readTime} min</span> : ''}
            </CText>
          </Flex>

          <MDXProvider components={components}>{props.children}</MDXProvider>

          <Stack direction="row" justify="flex-end">
            <CLink href="https://github.com/CwirL" target="_blank">
              <IconButton
                aria-label="Facebook Link"
                icon={<Icon as={FaGithub} />}
              />
            </CLink>
            <CLink
              href="https://www.linkedin.com/in/wilmer-cantillo-9a19b4171/"
              target="_blank"
            >
              <IconButton
                aria-label="LinkedIn Link"
                icon={<Icon as={FaLinkedin} />}
              />
            </CLink>
          </Stack>
        </PostSizer>
      </Box>
      <Footer />
    </>
  )
}
