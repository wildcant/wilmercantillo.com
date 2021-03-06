import { Box, Flex, Heading, useColorMode } from '@chakra-ui/react'
import Layout from 'components/layout'
import { graphql, PageProps } from 'gatsby'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import React from 'react'
import { useTranslation } from 'react-i18next'
import SectionContent from 'src/components/landing-section'
import { ComponentSizer } from 'src/components/styled/generic'

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
      <ComponentSizer
        h="90vh"
        minH={{ base: '400px', lg: '600px' }}
        maxH={{ base: '650px' }}
        pos="relative"
      >
        <Box
          as="section"
          d={{ md: 'flex' }}
          justifyContent={{ md: 'space-between' }}
        >
          <Heading
            fontFamily="Rouge Script"
            fontWeight="normal"
            color={isLight ? '#1D3557' : 'gray.400'}
            fontSize={['5xl', '7xl', '8xl', '9xl']}
            textAlign={['center', 'left']}
            width={{ md: '42%' }}
          >
            {t('home.myName')}
          </Heading>
          <Box
            position="absolute"
            bottom="0px"
            width={{ base: '200px', md: '300px', lg: '400px' }}
            height="auto"
            right={{ base: '0', md: '50%', lg: '40%' }}
            transform={{ md: 'scaleX(-1)' }}
          >
            {image && <GatsbyImage image={image} alt="Person sitting" />}
          </Box>
          <Box width={{ md: '50%' }}>
            <SectionContent
              name={t('home.intro.name')}
              title={t('home.intro.title')}
              description={t('home.intro.description')}
              buttonText={t('home.intro.buttonText')}
            />
          </Box>
        </Box>
      </ComponentSizer>
      <ComponentSizer h="100vh" minH={{ base: '400px', lg: '600px' }}>
        <Flex
          as="section"
          pos="relative"
          direction="column"
          justifyContent={['space-around']}
        >
          <Box
            position="absolute"
            bottom="0px"
            width={['100px', '300px', '600px']}
            height="200px"
            right={['1rem', '50%']}
            transform="revert"
          >
            {/* {image && <GatsbyImage image={image} alt="Person sitting" />} */}
          </Box>
          <Box width={{ md: '50%' }}>
            <SectionContent
              name={t('home.blog.name')}
              title={t('home.blog.title')}
              description={t('home.blog.description')}
              buttonText={t('home.blog.buttonText')}
            />
          </Box>
        </Flex>
      </ComponentSizer>
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
