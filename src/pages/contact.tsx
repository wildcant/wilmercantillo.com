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
    formState: { errors },
  } = useForm<ContactFormData>()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  const onSubmit = (data: ContactFormData) => {
    console.log({ data })
  }

  const reasons: string[] = t('contact.reasons', { returnObjects: true })
  console.log(errors)
  return (
    <Layout pathname={props.location.pathname}>
      <ComponentSizer minHeight="90vh">
        <Flex direction="column" alignItems="center" width="100%">
          <Box width="90%" maxW="450px">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
              <Input
                label={t('contact.name')}
                isLight={isLight}
                error={errors.name}
                {...register('name', {
                  required: {
                    value: true,
                    message: 'This field is required.',
                  },
                })}
              />
              <Input
                label={t('contact.email')}
                isLight={isLight}
                error={errors.email}
                {...register('email', {
                  required: {
                    value: true,
                    message: 'This field is required.',
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
                    message: 'This field is required.',
                  },
                })}
              />
              <Input
                label={t('contact.subject')}
                isLight={isLight}
                error={errors.subject}
                {...register('subject', {
                  required: {
                    value: true,
                    message: 'This field is required.',
                  },
                })}
              />
              <TextArea
                label={t('contact.message')}
                isLight={isLight}
                {...register('message')}
              />
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
