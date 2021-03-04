import React, { createContext, ReactNode, useContext, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

const LangContext = createContext('')

type Props = {
  lang: string
  children: ReactNode
}

export default function LangContextProvider(props: Props) {
  const { lang, children } = props
  const { i18n } = useTranslation()

  useEffect(() => {
    if (lang !== i18n.language) {
      i18n.changeLanguage(lang)
    }
  }, [lang])

  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>
}

export const useLangContext = () => useContext(LangContext)
