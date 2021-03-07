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
  fonts,
  colors,
  components: { Button },
  styles: {
    global: {
      p: {
        fontSize: [{ base: '1rem', lg: '1.2rem', xl: '1.4rem' }],
      },
    },
  },
})

export default theme
