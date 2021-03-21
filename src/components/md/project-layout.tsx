import { Badge, Box, Flex, SimpleGrid, Stack, Text } from '@chakra-ui/layout'
import { MDXProvider } from '@mdx-js/react'
import { GatsbyImage } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { Children, ProjectPost } from 'src/types'
import { components } from '.'
import Headings from './headings'
import { PostSizer } from './styled'

export default function ProjectLayout(props: ProjectPost & Children) {
  const { t } = useTranslation()

  return (
    <Box as="main" marginTop="10vh">
      <PostSizer>
        <Headings.H2>{props.title}</Headings.H2>
        <SimpleGrid columns={{ md: 3 }} spacing={{ md: 2 }} marginY="1rem">
          <Stack alignItems="center" marginY="0.5rem">
            <Text as="span" fontFamily="Fira Code">
              {t('projects.category')}
            </Text>
            <Headings.H6 textTransform="capitalize" marginTop="0px !important">
              {props.category}
            </Headings.H6>
          </Stack>
          <Stack alignItems="center" marginY="0.5rem">
            <Text as="span" fontFamily="Fira Code">
              {t('projects.type')}
            </Text>
            <Headings.H6 textTransform="capitalize" marginTop="0px !important">
              {props.projectType}
            </Headings.H6>
          </Stack>
          <Stack alignItems="center" marginY="0.5rem">
            <Text as="span" fontFamily="Fira Code">
              {t('projects.tech')}
            </Text>
            <Headings.H6 textTransform="capitalize" marginTop="0px !important">
              {props.tech}
            </Headings.H6>
          </Stack>
        </SimpleGrid>

        <Flex justify="flex-end">
          <Text as="span" fontWeight="light" color="gray.600">
            {props.date}
          </Text>
        </Flex>
        <Box marginBottom="1rem">
          {props.banner && (
            <GatsbyImage
              image={props.banner.childImageSharp.gatsbyImageData}
              alt="Post Banner"
            />
          )}
        </Box>
        <Flex margin="1rem 0">
          {props.keywords?.map(keyword => (
            <Badge
              key={keyword}
              variant="solid"
              backgroundColor="gray.100"
              color="gray.500"
              marginRight="1rem"
              textTransform="capitalize"
            >
              {keyword}
            </Badge>
          ))}
        </Flex>

        <MDXProvider components={components}>{props.children}</MDXProvider>
      </PostSizer>
    </Box>
  )
}
