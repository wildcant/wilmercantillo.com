import { Button } from '@chakra-ui/button'
import { Box, Heading, Text } from '@chakra-ui/layout'
import React from 'react'
// import Button from './Button'

type Props = {
  name: string
  title: string
  description?: string
  buttonText?: string
}

const LandingSection = ({ name, title, description, buttonText }: Props) => (
  <Box as="section">
    <Text as="small" fontFamily="Fira Code" letterSpacing="0.1em" opacity="0.5">
      •{name}
    </Text>
    <Heading size="2xl">{title}</Heading>
    {description && <Text fontSize="xl">{description}</Text>}
    {buttonText && <Button variant="solid">{buttonText}</Button>}
  </Box>
)

export default LandingSection
