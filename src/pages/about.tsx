import { Heading, Text } from '@chakra-ui/layout'
import { PageProps } from 'gatsby'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from 'src/components/layout'
import { ComponentSizer } from 'src/components/styled/generic'

export default function Library(props: PageProps) {
  const { t } = useTranslation()
  return (
    <Layout pathname={props.location.pathname}>
      <ComponentSizer height="90vh">
        <Heading as="h1" size="xl">
          {t('about.title')}
        </Heading>
        <br />
        <Text fontSize="2xl">{t('about.p1')}</Text>
        <br />
        <Text fontSize="2xl">{t('about.p2')}</Text>
      </ComponentSizer>
    </Layout>
  )
}
