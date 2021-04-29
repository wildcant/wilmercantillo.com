import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Flex, Stack } from '@chakra-ui/layout'
import { Button } from '@chakra-ui/react'
import { PageProps } from 'gatsby'
import React from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { Input } from 'src/components/form/input'
import { Select } from 'src/components/form/select'
import { TextArea } from 'src/components/form/text-area'
import Layout from 'src/components/layout'
import { ComponentSizer } from 'src/components/styled/generic'

type ContactFormData = {
  name: string
  email: string
  reason: string
  subject: string
  message: string
}

export default function Library(props: PageProps) {
  const { t } = useTranslation()
  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  const onSubmit = async (data: ContactFormData) => {
    await fetch('https://tan-porcupine-3372.twil.io/send-email', {
      method: 'post',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
      },
      body: new URLSearchParams(data).toString(),
    })
  }

  const reasons: string[] = t('contact.reasons', { returnObjects: true })

  return (
    <Layout pathname={props.location.pathname}>
      <ComponentSizer minHeight="90vh">
        <Flex direction="column" alignItems="center" width="100%">
          <Box width="90%" maxW="450px">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                defaultValue="Wilmer"
                label={t('contact.name')}
                isLight={isLight}
                error={errors.name}
                {...register('name', {
                  required: {
                    value: true,
                    message: t('contact.requiredField'),
                  },
                })}
              />
              <Input
                defaultValue="will.canti2697@gmail.com"
                label={t('contact.email')}
                isLight={isLight}
                error={errors.email}
                {...register('email', {
                  required: {
                    value: true,
                    message: t('contact.requiredField'),
                  },
                })}
              />
              <Select
                label={t('contact.reason')}
                isLight={isLight}
                options={reasons}
                error={errors.reason}
                {...register('reason', {
                  required: {
                    value: true,
                    message: t('contact.requiredField'),
                  },
                })}
              />
              <Input
                label={t('contact.subject')}
                isLight={isLight}
                error={errors.subject}
                {...register('subject')}
              />
              <TextArea
                label={t('contact.message')}
                isLight={isLight}
                {...register('message')}
              />
              <Stack align="center">
                <Button
                  variant="outline"
                  type="submit"
                  marginTop="1.5rem"
                  isLoading={isSubmitting}
                  disabled={isSubmitting}
                >
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
