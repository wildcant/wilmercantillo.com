import { Box } from '@chakra-ui/layout'
import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'
import { SEOProps, SEOWithQuery } from './seo'

type Props = SEOProps & {
  children: ReactNode
  pathname?: string
}

export default function Layout({ children, pathname, ...props }: Props) {
  return (
    <>
      <SEOWithQuery {...props} />
      <Header pathname={pathname} />
      <Box as="main" marginTop="10vh">
        {children}
      </Box>
      <Footer />
    </>
  )
}
