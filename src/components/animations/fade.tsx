import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

export const AnimatedContainer = styled(motion.div)`
  display: flex;
`

type Props = {
  isVisible: boolean
  children: ReactNode
}

const FadeAnimation = ({ isVisible, children }: Props) => (
  <AnimatedContainer
    animate={isVisible ? 'visible' : 'hidden'}
    initial="hidden"
    variants={{
      visible: { opacity: 1, transition: { duration: 0.5 } },
      hidden: { opacity: 0 },
    }}
  >
    {children}
  </AnimatedContainer>
)

export default FadeAnimation
