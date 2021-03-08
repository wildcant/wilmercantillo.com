import { Box, Container } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import ProgressBarAnimated from 'components/animations/progress'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'

const variants = {
  visible: { opacity: 1, transition: { duration: 0.3 } },
  hidden: { opacity: 0 },
}

export const BoxStyled = styled(motion.div)`
  display: flex;
`

const animationTime = 4000
export default function Test() {
  const [isVisible, setIsVisible] = useState<boolean>(true)
  const pages = [1, 2, 3, 4, 5]
  const [page, setPage] = useState(0)
  const nextPage = () =>
    setPage(prevPage => (prevPage === pages.length - 1 ? 0 : prevPage + 1))
  const toggleIsVisible = () => setIsVisible(prevValue => !prevValue)

  useEffect(() => {
    const timer = setInterval(() => {
      toggleIsVisible()
      setTimeout(() => {
        nextPage()
        toggleIsVisible()
      }, 300)
    }, animationTime)
    return () => {
      clearInterval(timer)
    }
  }, [])

  return (
    <Container>
      <button
        type="button"
        onClick={() => setIsVisible(prevValue => !prevValue)}
      >
        Click here to make content visible
      </button>
      <BoxStyled
        animate={isVisible ? 'visible' : 'hidden'}
        initial="hidden"
        variants={variants}
      >
        <Box>{pages[page]}</Box>
      </BoxStyled>
      <ProgressBarAnimated animationTime={!isVisible ? 0 : animationTime} />
    </Container>
  )
}
