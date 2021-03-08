/* eslint-disable no-undef */
const langKeyDefault = 'es'
module.exports = {
  siteMetadata: {
    title: 'wilmercantillo',
    supportedLanguages: ['es', 'en'],
    langKeyDefault,
  },
  flags: {
    DEV_SSR: false,
  },
  plugins: [
    `gatsby-plugin-image`,
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-remark-images',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
        ],
      },
    },
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-i18n`,
      options: {
        langKeyDefault,
        langKeyForNull: 'es',
        prefixDefault: false,
        useLangKeyLayout: false,
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          src: `${__dirname}/src`,
          components: `${__dirname}/src/components`,
          layouts: `${__dirname}/src/layouts`,
          pages: `${__dirname}/src/pages`,
          templates: `${__dirname}/src/templates`,
          images: `${__dirname}/src/images`,
        },
        extensions: ['ts'],
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: `${__dirname}/src/images/svg`,
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
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'posts',
        path: './src/pages/posts',
      },
      __key: 'posts',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'projects',
        path: './src/pages/projects',
      },
      __key: 'projects',
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
