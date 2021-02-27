import React from 'react'
import { ChakraProvider, CSSReset } from '@chakra-ui/react'
import customTheme from './src/theme'

export const wrapRootElement = ({ element }) => {
  return (
    <ChakraProvider theme={customTheme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  )
}
