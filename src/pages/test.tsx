import { chakra, HTMLChakraProps } from '@chakra-ui/react'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { HTMLMotionProps, motion } from 'framer-motion'
import Name from 'images/svg/name.svg'
import React from 'react'

type Merge<P, T> = Omit<P, keyof T> & T
type MotionBoxProps = Merge<HTMLChakraProps<'div'>, HTMLMotionProps<'div'>>
export const MotionBox: React.FC<MotionBoxProps> = motion(chakra.div)

const sign = keyframes`
  to {
    stroke-dashoffset: 0;
  }
`
const AnimatedName = styled(Name)`
  #signature {
    stroke-dasharray: 4954;
    stroke-dashoffset: 4954;
    animation: ${sign} 4s ease;
    animation-fill-mode: forwards;
  }
`

export default function Test() {
  return (
    <div>
      <MotionBox
        height="40px"
        bg="red.300"
        drag="x"
        dragConstraints={{ left: -100, right: 100 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Hello
      </MotionBox>
      <AnimatedName />
    </div>
  )
}
