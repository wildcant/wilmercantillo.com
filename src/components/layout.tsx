import { Box } from '@chakra-ui/react'
import React, { ReactChildren } from 'react'
import Footer from './footer'
import Header, { NavLink } from './header'

const links: NavLink[] = [
  { text: 'Blog', uri: '#' },
  { text: 'Library', uri: '#' },
  { text: 'About', uri: '#' },
  { text: 'Curriculum', uri: '#' },
  { text: 'Contact', uri: '#' },
]

type Props = {
  children: ReactChildren
}

export default function Layout({ children }: Props) {
  return (
    <Box as="div">
      <Header navLinks={links} />
      <main>{children}</main>
      <Footer />
    </Box>
  )
}
