/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const config = require('./gatsby-config')

exports.onCreatePage = async ({ page, actions }) => {
  if (!page.path.includes('posts')) {
    // For pages that are not inside blog, generate page for each lang
    const { createPage, deletePage } = actions
    await deletePage(page)
    const { supportedLanguages, langKeyDefault } = config.siteMetadata
    await Promise.all(
      supportedLanguages.map(async lang => {
        const originalPath = page.path
        const localizedPath =
          lang === langKeyDefault ? originalPath : `/${lang}${page.path}`
        await createPage({
          ...page,
          path: localizedPath,
          context: {
            ...page.context,
            langKey: lang,
          },
        })
      }),
    )
  }
  // For blog pages langKey and path will be alright
  // since I'm using gatsby i18n and mdx plugins
}
