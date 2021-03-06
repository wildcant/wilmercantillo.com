import { extendTheme } from '@chakra-ui/react'
import Button from './components/button'
import colors from './foundations/colors'
import { fonts } from './styles'

const config = {
  initialColorMode: 'light',
  useSystemColorMode: false,
}

const theme = extendTheme({
  sizes: {},
  config,
  textStyles: {},
  fonts,
  colors,
  components: { Button },
  styles: {
    global: {
      colorScheme: 'purple',
    },
  },
})

export default theme
