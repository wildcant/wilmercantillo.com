import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from 'components/layout'
import { graphql, PageProps } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'

interface Props extends PageProps {}

export default function IndexPage(props: Props) {
  console.log({ props })
  // const image = getImage('person.png')
  const { t } = useTranslation()
  return (
    <Layout>
      <Container
        as="section"
        maxWidth="full"
        pos="relative"
        h="90vh"
        minH={{ md: '600px' }}
        p="1em"
        d={{ md: 'flex' }}
        justifyContent={{ md: 'space-between' }}
      >
        <Heading
          fontFamily="Rouge Script"
          fontWeight="normal"
          color="#1D3557"
          fontSize={['5xl', '8xl', '9xl']}
          textAlign={['center', 'left']}
          width={{ md: '42%' }}
        >
          {t('home.myName')}
        </Heading>
        <Box
          zIndex="0"
          position="absolute"
          bottom={0}
          left={{ md: '25%' }}
          height="100%"
        >
          <StaticImage src="../images/person.png" alt="Person" />
        </Box>
      </Container>
    </Layout>
  )
}
export const query = graphql`
  {
    personImg: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FIXED)
      }
    }
  }
`
