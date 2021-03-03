import React, { createContext, ReactNode, useContext } from 'react'
import { useTranslation } from 'react-i18next'

const LangContext = createContext('')

type Props = {
  lang: string
  children: ReactNode
}

export default function LangContextProvider(props: Props) {
  const { lang, children } = props
  const { i18n } = useTranslation()
  if (lang !== i18n.language) {
    i18n.changeLanguage(lang)
  }

  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export const useLangContext = () => useContext(LangContext)
