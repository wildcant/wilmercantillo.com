import { Text as CText, TextProps } from '@chakra-ui/react'
import React from 'react'

export const Paragraph = ({ children, ...props }: TextProps) => (
  <CText as="p" {...props} fontSize={{ base: '18px', md: '21px' }}>
    {children}
  </CText>
)

export default {
  Paragraph,
}
