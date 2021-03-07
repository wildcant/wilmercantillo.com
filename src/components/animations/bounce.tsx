import { Box } from '@chakra-ui/react'
import styled from '@emotion/styled'
import { motion } from 'framer-motion'
import React, { ReactNode } from 'react'

const BoxStyled = styled(motion.div)`
  display: block;
  margin-right: auto;
  margin-left: auto;
`

type Props = {
  children: ReactNode
}

const BounceAnimation = ({ children }: Props) => (
  <Box position="relative">
    <BoxStyled
      transition={{
        y: {
          duration: 1,
          repeat: Infinity,
          ease: 'easeOut',
        },
      }}
      animate={{
        y: ['0.1rem', '1rem', '0.1rem'],
      }}
    >
      {children}
    </BoxStyled>
  </Box>
)

export default BounceAnimation
