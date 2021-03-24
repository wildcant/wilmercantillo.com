import { Flex } from '@chakra-ui/layout'
import React, { createRef, useEffect } from 'react'

export default function DynamicDate() {
  const date = createRef<HTMLDivElement>()
  useEffect(() => {
    const dateInterval = setInterval(() => {
      if (date.current) {
        date.current.innerText = new Date().toLocaleString()
      }
    }, 1000)
    return () => {
      clearInterval(dateInterval)
    }
  }, [])
  return (
    <Flex
      ref={date}
      width="100%"
      height="4rem"
      justify="center"
      align="center"
      fontSize={{ base: '1.4rem', md: '2rem' }}
    ></Flex>
  )
}
