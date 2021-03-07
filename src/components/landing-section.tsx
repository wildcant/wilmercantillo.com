import { Button } from '@chakra-ui/button'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/layout'
import React from 'react'

type Props = BoxProps & {
  name: string
  title: string
  description?: string
  buttonText?: string
}

const SectionContent = ({
  name,
  title,
  description,
  buttonText,
  ...props
}: Props) => (
  <Box as="section" {...props}>
    <Text as="small" fontFamily="Fira Code" letterSpacing="0.1em" opacity="0.5">
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
    {buttonText && (
      <Button variant="solid" m={{ base: '0 0 1rem 0', md: '1rem 0' }}>
        {buttonText}
      </Button>
    )}
  </Box>
)
export default SectionContent
