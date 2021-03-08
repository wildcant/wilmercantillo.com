import { Container } from '@chakra-ui/layout'
import React, { createRef } from 'react'

export default function Test() {
  const header = createRef<HTMLDivElement>()
  return (
    <Container>
      <div ref={header}></div>
    </Container>
  )
}
