import { PageProps } from 'gatsby'
import React from 'react'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3'
import ContactForm from 'src/components/contact-form'
import Layout from 'src/components/layout'

export default function Contact(props: PageProps) {
  return (
    <GoogleReCaptchaProvider
      reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
    >
      <Layout pathname={props.location.pathname}>
        <ContactForm />
      </Layout>
    </GoogleReCaptchaProvider>
  )
}
