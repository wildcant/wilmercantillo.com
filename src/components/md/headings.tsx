import { Heading, HeadingProps } from '@chakra-ui/layout'
import React from 'react'

export const H1 = (props: HeadingProps) => (
  <Heading
    as="h1"
    size="2xl"
    marginTop={{ base: '0.93em', md: '1.25em' }}
    fontWeight="medium"
    {...props}
  >
    {props.children}
  </Heading>
)
export const H2 = (props: HeadingProps) => (
  <Heading
    as="h2"
    size="xl"
    marginTop={{ base: '1.23em', md: '1.72em' }}
    fontWeight="medium"
    {...props}
  >
    {props.children}
  </Heading>
)
export const H3 = (props: HeadingProps) => (
  <Heading
    as="h3"
    size="lg"
    marginTop={{ base: '0.8em', md: '1em' }}
    {...props}
  >
    {props.children}
  </Heading>
)
export const H4 = (props: HeadingProps) => (
  <Heading as="h4" size="md" {...props}>
    {props.children}
  </Heading>
)
export const H5 = (props: HeadingProps) => (
  <Heading as="h5" size="sm" {...props}>
    {props.children}
  </Heading>
)
export const H6 = (props: HeadingProps) => (
  <Heading as="h6" size="xs" {...props}>
    {props.children}
  </Heading>
)

export default {
  H1,
  H2,
  H3,
  H4,
  H5,
  H6,
}
