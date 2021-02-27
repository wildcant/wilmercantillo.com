import { ColorModeScript } from '@chakra-ui/react'
import React from 'react'
import theme from './src/theme'

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
      key="chakra-ui-no-flash"
    />,
  ])
}
