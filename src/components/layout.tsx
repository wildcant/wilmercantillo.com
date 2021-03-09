import { Box } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <Box as="main" marginTop="10vh">
        {children}
      </Box>
      <Footer />
    </>
  )
}
