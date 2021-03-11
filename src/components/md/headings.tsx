import { Heading, HeadingProps } from '@chakra-ui/layout'
import React from 'react'

export const H1 = (props: HeadingProps) => (
  <Heading as="h1" fontFamily="Sf Pro Display" size="4xl" {...props}>
    {props.children}
  </Heading>
)
export const H2 = (props: HeadingProps) => (
  <Heading as="h2" fontFamily="Sf Pro Display" size="3xl" {...props}>
    {props.children}
  </Heading>
)
export const H3 = (props: HeadingProps) => (
  <Heading as="h3" fontFamily="Sf Pro Display" size="2xl" {...props}>
    {props.children}
  </Heading>
)
export const H4 = (props: HeadingProps) => (
  <Heading as="h4" fontFamily="Sf Pro Display" size="xl" {...props}>
    {props.children}
  </Heading>
)
export const H5 = (props: HeadingProps) => (
  <Heading as="h5" fontFamily="Sf Pro Display" size="lg" {...props}>
    {props.children}
  </Heading>
)
export const H6 = (props: HeadingProps) => (
  <Heading as="h6" fontFamily="Sf Pro Display" size="md" {...props}>
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
