import { IconButton, Text } from '@chakra-ui/react'
import { navigate } from 'gatsby'
import React from 'react'
import { useLocation } from 'react-use'
import { defaultLanguage } from 'src/translations'
import { useLangContext } from './lang-context'

export default function LangPicker() {
  const location = useLocation()
  const lang = useLangContext()
  const newPath = location.pathname?.includes('en')
    ? '/' + location.pathname.split('/').splice(2).join('/') || '/'
    : `/en${location.pathname}`

  const toggleLang = () => navigate(newPath, { replace: true })

  return (
    <IconButton
      aria-label="theme-mode"
      onClick={toggleLang}
      bg="transparent"
      fontSize="2xl"
      icon={lang === defaultLanguage ? <Text>EN</Text> : <Text>ES</Text>}
    />
  )
}
