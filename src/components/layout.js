import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import React from 'react'
import Footer from './footer'
import Header from './header'

const links = [
  { text: 'Blog', uri: '#' },
  { text: 'Library', uri: '#' },
  { text: 'About', uri: '#' },
  { text: 'Curriculum', uri: '#' },
  { text: 'Contact', uri: '#' },
]

export default function Layout({ children }) {
  return (
    <Box as="div">
      <Header navLinks={links} />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}
