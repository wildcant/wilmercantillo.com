import { Container } from '@chakra-ui/layout'
import { theme } from '@chakra-ui/theme'
import styled from '@emotion/styled'

const { md, lg } = theme.breakpoints

export const ComponentSizer = styled(Container)`
  max-width: 100%;
  padding: 0.5rem 1rem;
  @media (min-width: ${md}) {
    padding: 1rem 3rem;
  }
  @media (min-width: ${lg}) {
    max-width: 1536px;
  }
`
