import { motion, Variants } from 'framer-motion'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function Test() {
  const { t } = useTranslation()

  const sentence = t('home.intro.description')
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
  return (
    <div>
      Test
      <motion.p variants={textAnimation} initial="hidden" animate="visible">
        {sentence.split('').map((letter, idx) => (
          <motion.span key={`${letter}-${idx}`} variants={letterAnimation}>
            {letter}
          </motion.span>
        ))}
      </motion.p>
    </div>
  )
}
