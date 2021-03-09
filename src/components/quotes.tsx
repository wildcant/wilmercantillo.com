import { Box, Flex, Link, Text } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { Quote } from 'src/types'
import FadeAnimation from './animations/fade'
import ProgressBarAnimated from './animations/progress'

type Props = {
  quotes: Quote[]
}

const animationTime = 8000
export default function Quotes({ quotes }: Props) {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const [quoteIndex, setQuoteIndex] = useState(0)
  const nextPage = () =>
    setQuoteIndex(prevQuoteIndex =>
      prevQuoteIndex === quotes.length - 1 ? 0 : prevQuoteIndex + 1,
    )
  const toggleIsVisible = () => setIsVisible(prevValue => !prevValue)

  useEffect(() => {
    const timer = setInterval(() => {
      toggleIsVisible()
      setTimeout(() => {
        nextPage()
        toggleIsVisible()
      }, 500)
    }, animationTime)
    return () => {
      clearInterval(timer)
    }
  }, [])

  const quote = quotes[quoteIndex]
  return (
    <Flex maxW="100%" direction="column" align="center">
      <Box width="100%" maxWidth="3xl">
        <ProgressBarAnimated animationTime={!isVisible ? 0 : animationTime} />
        <FadeAnimation isVisible={isVisible}>
          <Box w="100%">
            <Text as="q" fontSize={{ md: '1.4rem', lg: '1.6rem' }}>
              {quote.text}
            </Text>
            <Text
              d="block"
              textAlign="right"
              color="gray.600"
              pr={{ md: '2rem' }}
            >
              - {quote.author},{' '}
              <Link href={quote.link} color="blue.400" target="_blank">
                {quote.social}
              </Link>
            </Text>
          </Box>
        </FadeAnimation>
      </Box>
    </Flex>
  )
}
