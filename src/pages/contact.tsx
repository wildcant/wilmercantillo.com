import { Flex, Heading } from '@chakra-ui/layout'
import React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from 'src/components/layout'
import { ComponentSizer } from 'src/components/styled/generic'

export default function Library() {
  const { t } = useTranslation()
  return (
    <Layout>
      <ComponentSizer height="90vh">
        <Flex height="100%" align="center" justify="center">
          <Heading fontFamily="Rouge Script" size="xl">
            {t('general.underDev')}.
          </Heading>
        </Flex>
      </ComponentSizer>
    </Layout>
  )
}
