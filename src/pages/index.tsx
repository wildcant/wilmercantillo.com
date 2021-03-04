import { Container, Heading } from '@chakra-ui/react'
import Layout from 'components/layout'
import React from 'react'
import { useTranslation } from 'react-i18next'

export default function IndexPage() {
  const { t } = useTranslation()
  return (
    <Layout>
      <Container as="section" maxWidth="full" pos="relative" h="90vh" p="4">
        <Heading fontFamily="Rouge Script">{t('home.myName')}</Heading>
      </Container>
    </Layout>
  )
}
