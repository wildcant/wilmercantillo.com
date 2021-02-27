import * as React from 'react'
import { Link } from 'gatsby'
import { Container, Heading } from '@chakra-ui/react'

const NotFoundPage = () => {
  return (
    <Container as="main" textAlign="center">
      <Heading>Page not found | 404</Heading>
      <Link to="/">Return back to home</Link>
    </Container>
  )
}

export default NotFoundPage
