/* eslint-disable no-undef */
module.exports = {
  siteMetadata: {
    title: 'wilmercantillo',
  },
  plugins: [
    'gatsby-plugin-sharp',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-mdx',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: `${__dirname}/src`,
          components: `${__dirname}/src/components`,
          layouts: `${__dirname}/src/layouts`,
          pages: `${__dirname}/src/pages`,
          templates: `${__dirname}/src/templates`,
          assets: `${__dirname}/src/assets`,
          images: `${__dirname}/src/assets/images`,
        },
        extensions: ['js'],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/assets/images/svg`,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: './src/images/',
      },
      __key: 'images',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      __key: 'pages',
    },
    {
      resolve: '@chakra-ui/gatsby-plugin',
      options: {
        isResettingCSS: true,
        isUsingColorMode: true,
      },
    },
  ],
}
