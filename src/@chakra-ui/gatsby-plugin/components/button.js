import { mode } from '@chakra-ui/theme-tools'

const baseStyle = props => {
  return {
    borderRadius: 'full',
    textTransform: 'uppercase',
    borderColor: mode('primary.500', 'purple.500')(props),
    _focus: {
      boxShadow: 'none',
    },
    _active: {
      boxShadow: 'inner',
      transform: 'scale(0.99)',
    },
  }
}

const sizes = {
  sm: {
    fontSize: '1rem',
    padding: '0.5rem',
  },
  md: {
    fontSize: '1rem',
    padding: '0.5rem 1.5rem',
  },
}

const variants = {
  default: props => ({}),
  outline: props => ({
    borderColor: mode('primary.500', 'purple.500')(props),
    color: mode('primary.500', 'purple.500')(props),
    _hover: {
      bg: mode('primary.500', 'purple.500')(props),
      color: 'white',
    },
    _active: {
      bg: mode('primary.800', 'purple.800')(props),
    },
  }),
  solid: props => ({
    bg: mode('primary.500', 'purple.500')(props),
    color: 'white',
    boxShadow: 'lg',
    _hover: {
      boxShadow: 'xxl',
      bg: mode('primary.600', 'purple.600')(props),
      transform: 'scale(1.01)',
    },
    _active: {
      bg: mode('primary.800', 'purple.800')(props),
    },
  }),
}

const defaultProps = {
  size: 'md',
  variant: 'default',
}

const Button = {
  baseStyle,
  sizes,
  variants,
  defaultProps,
}

export default Button
