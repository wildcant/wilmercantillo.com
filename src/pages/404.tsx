import { Container, Heading } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

export default function NotFoundPage() {
  return (
    <Container as="main" textAlign="center">
      <Heading>Page not found | 404</Heading>
      <Link to="/">Return back to home</Link>
    </Container>
  )
}
