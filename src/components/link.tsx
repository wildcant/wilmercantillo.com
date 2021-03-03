import { Link as GLink } from 'gatsby'
import React, { ReactNode } from 'react'
import { defaultLanguage } from '../translations'
import { useLangContext } from './lang-context'

type Props = {
  to: string
  children: ReactNode
}

export default function Link({ to, children }: Props) {
  const lang = useLangContext()
  const calculatedPath = lang === defaultLanguage ? to : `/${lang}${to}`
  return <GLink to={calculatedPath}>{children}</GLink>
}
