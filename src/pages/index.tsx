import { Box, Container, Heading, useColorMode } from '@chakra-ui/react'
import Layout from 'components/layout'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import LandingSection from 'src/components/landing-section'

type Props = PageProps & {
  data: {
    personImg: IGatsbyImageData
  }
}

export default function IndexPage(props: Props) {
  const { t } = useTranslation()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'
  const image = getImage(props.data.personImg)

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
          color={'#1D3557'}
          fontSize={['5xl', '8xl', '9xl']}
          textAlign={['center', 'left']}
          width={{ md: '42%' }}
        >
          {t('home.myName')}
        </Heading>
        <Box
          position="absolute"
          bottom="0"
          width={['200px', '400px', '600px']}
          height="200px"
        >
          {image && <GatsbyImage image={image} alt="Person sitting" />}
        </Box>
        <Box>
          <LandingSection
            name={t('home.intro.name')}
            title={t('home.intro.title')}
            description={t('home.intro.description')}
            buttonText={t('home.intro.buttonText')}
          />
        </Box>
        <br />
        <br />
      </Container>
    </Layout>
  )
}
export const query = graphql`
  {
    personImg: file(relativePath: { eq: "person.png" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`
