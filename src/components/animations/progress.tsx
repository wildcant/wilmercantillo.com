import { Progress, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { useTween } from 'react-use'

type Props = {
  animationTime: number
}
const ProgressBarAnimated = ({ animationTime }: Props) => {
  const t = useTween('linear', animationTime)
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  return (
    <Progress
      size="sm"
      colorScheme={isLight ? 'primary' : 'purple'}
      opacity="0.8"
      value={t * 100}
      isAnimated
      hasStripe
    />
  )
}

export default ProgressBarAnimated
