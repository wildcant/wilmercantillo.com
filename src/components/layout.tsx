import { Box } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import { SEOProps, SEOWithQuery } from './seo'

type Props = SEOProps & {
  children: ReactNode
}

export default function Layout({ children, ...props }: Props) {
  return (
    <>
      <SEOWithQuery {...props} />
      <Header />
      <Box as="main" marginTop="10vh">
        {children}
      </Box>
      <Footer />
    </>
  )
}
