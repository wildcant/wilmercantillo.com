import { Button } from '@chakra-ui/button'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
import Link from './link'

type Props = BoxProps & {
  name: string
  title: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

const SectionContent = ({
  name,
  title,
  description,
  buttonText,
  buttonLink,
  ...props
}: Props) => (
  <Box as="section" {...props}>
    <Text as="small" fontFamily="Fira Mono" letterSpacing="0.1em" opacity="0.5">
      •{name}
    </Text>
    <Heading size="xl" m="0.5rem 0">
      {title}
    </Heading>
    {description && (
      <Text
        fontSize={['lg', 'xl']}
        width={{ base: '80%', md: '100%', lg: '80%' }}
        m="0.5rem 0 1rem 0"
      >
        {description}
      </Text>
    )}
    {buttonText && buttonLink && (
      <Link to={buttonLink}>
        <Button variant="solid" m={{ base: '0 0 1rem 0', md: '1rem 0' }}>
          {buttonText}
        </Button>
      </Link>
    )}
  </Box>
)
export default SectionContent
