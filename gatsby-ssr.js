import { ChakraProvider, ColorModeScript, CSSReset } from '@chakra-ui/react'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import LangContextProvider from './src/components/lang-context'
import i18n from './src/lib/i18next'
import theme from './src/theme'

export const onRenderBody = ({ setPreBodyComponents }) =>
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
      key="chakra-ui-no-flash"
    />,
  ])

export const wrapRootElement = ({ element }) => (
  <I18nextProvider i18n={i18n}>
    <ChakraProvider theme={theme}>
      <CSSReset />
      {element}
    </ChakraProvider>
  </I18nextProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <LangContextProvider lang={props.pageContext.langKey}>
    {element}
  </LangContextProvider>
)
