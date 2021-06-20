import { Text as CText, TextProps } from '@chakra-ui/react'
import React from 'react'

export const Paragraph = ({ children, ...props }: TextProps) => (
  <CText
    as="p"
    {...props}
    fontSize={{ base: '18px', md: '21px' }}
    marginTop={{ base: '1.56em', md: '2em' }}
    lineHeight={{ base: '20px', md: '32px' }}
  >
    {children}
  </CText>
)

export default {
  Paragraph,
}
