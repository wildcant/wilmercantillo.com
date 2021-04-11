import { Button } from '@chakra-ui/button'
import { Box, BoxProps, Heading, Text } from '@chakra-ui/layout'
import { motion, Variants } from 'framer-motion'
import React from 'react'
import Link from './link'

type Props = BoxProps & {
  name: string
  title: string
  description?: string
  buttonText?: string
  buttonLink?: string
}

const textAnimation: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.2,
      staggerChildren: 0.04,
    },
  },
}
const letterAnimation: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.001 } },
}

const SectionContent = ({
  name,
  title,
  description,
  buttonText,
  buttonLink,
  ...props
}: Props) => (
  <Box as="section" {...props}>
    <Text as="small" fontFamily="Fira Mono" letterSpacing="0.1em" opacity="0.5">
      •{name}
    </Text>
    <Heading size="xl" m="0.5rem 0">
      {title}
    </Heading>
    {description && (
      <Box
        fontSize={['lg', 'xl']}
        width={{ base: '100%', lg: '80%' }}
        m="0.5rem 0 1rem 0"
      >
        <motion.p variants={textAnimation} initial="hidden" animate="visible">
          {description.split('').map((letter, idx) => (
            <motion.span key={`${letter}-${idx}`} variants={letterAnimation}>
              {letter}
            </motion.span>
          ))}
        </motion.p>
      </Box>
    )}
    {buttonText && buttonLink && (
      <Link to={buttonLink}>
        <Button variant="solid" m={{ base: '0 0 1rem 0', md: '1rem 0' }}>
          {buttonText}
        </Button>
      </Link>
    )}
  </Box>
)
export default SectionContent
