import 'focus-visible/dist/focus-visible'
import React from 'react'
import { I18nextProvider } from 'react-i18next'
import { Fonts, GeneralStyles } from './src/@chakra-ui/gatsby-plugin/styles'
import LangContextProvider from './src/components/lang-context'
import i18n from './src/lib/i18next'

export const wrapRootElement = ({ element }) => (
  <I18nextProvider i18n={i18n}>
    <GeneralStyles />
    <Fonts />
    {element}
  </I18nextProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <LangContextProvider lang={props.pageContext.langKey}>
    {element}
  </LangContextProvider>
)
