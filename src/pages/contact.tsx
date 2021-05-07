import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Flex, Stack, Text } from '@chakra-ui/layout'
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
  ScaleFade,
} from '@chakra-ui/react'
import { PageProps } from 'gatsby'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { useLocalStorage } from 'react-use'
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
  const [message, setMessage] = useState('')
  const [messageSent, setMessageSent] = useState(false)
  const [contactSent, setContactSent] = useLocalStorage('contact')
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  useEffect(() => {
    if (contactSent) {
      setMessageSent(true)
    }
  }, [])

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch('/api/send-mail', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.ok) {
        setMessageSent(true)
        setContactSent(true)
      } else {
        setMessage(t('contact.failMessage'))
        setTimeout(() => setMessage(''), 5000)
      }
    } catch (error) {
      setMessage(t('contact.failMessage'))
    }
  }

  const reasons: string[] = t('contact.reasons', { returnObjects: true })

  return (
    <>
      <Layout pathname={props.location.pathname}>
        <ComponentSizer minHeight="90vh" position="relative">
          <Box position="absolute" right="0">
            <ScaleFade initialScale={0.9} in={!!message}>
              <Alert status="warning" zIndex="9">
                <AlertIcon />
                <AlertTitle>{message}</AlertTitle>
              </Alert>
            </ScaleFade>
          </Box>
          {messageSent ? (
            <Stack minH="300px" align="center" justify="center">
              <Alert
                status="success"
                variant="subtle"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
                height="200px"
                maxW="md"
              >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  {t('contact.successTitle')}
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  {t('contact.successMessage')}
                </AlertDescription>
              </Alert>
              <Text fontSize="sm" position="absolute" bottom="0" right="0">
                {t('contact.anotherMessage')}{' '}
                <Button
                  fontSize="sm"
                  onClick={() => {
                    setMessageSent(false)
                    setContactSent(false)
                  }}
                >
                  {t('contact.clickHere')}
                </Button>
              </Text>
            </Stack>
          ) : (
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
                        message: t('contact.requiredField'),
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
          )}
        </ComponentSizer>
      </Layout>
    </>
  )
}
