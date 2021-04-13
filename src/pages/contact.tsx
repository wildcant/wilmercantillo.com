import { Button } from '@chakra-ui/button'
import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Flex, Stack } from '@chakra-ui/layout'
import { PageProps } from 'gatsby'
import React, { FormEvent } from 'react'
import { useTranslation } from 'react-i18next'
import { Input } from 'src/components/form/input'
import { Select } from 'src/components/form/select'
import { TextArea } from 'src/components/form/text-area'
import Layout from 'src/components/layout'
import { ComponentSizer } from 'src/components/styled/generic'

export default function Library(props: PageProps) {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  const subjects: string[] = t('contact.subjects', { returnObjects: true })

  return (
    <Layout pathname={props.location.pathname}>
      <ComponentSizer height="90vh">
        <Flex direction="column" alignItems="center" width="100%">
          <Box width="90%" maxW="450px">
            <form onSubmit={onSubmit} noValidate>
              <Input
                label={t('contact.name')}
                isLight={isLight}
                // error={{ message: 'Error message' }}
              />
              <Input label={t('contact.lastName')} isLight={isLight} />
              <Select label={t('contact.subject')} isLight={isLight}>
                <option value=""></option>
                {subjects.map(subject => (
                  <option key={subject} value={subject}>
                    {subject}
                  </option>
                ))}
              </Select>
              <TextArea label={t('contact.message')} isLight={isLight} />
              <Stack align="center">
                <Button variant="outline" type="submit" marginTop="1.5rem">
                  {t('contact.submit')}
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </ComponentSizer>
    </Layout>
  )
}
