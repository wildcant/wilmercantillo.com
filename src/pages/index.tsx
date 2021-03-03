import Layout from 'components/layout'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function IndexPage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <h1>{t('home.title')}</h1>
      <div>This is main</div>
    </Layout>
  )
}
