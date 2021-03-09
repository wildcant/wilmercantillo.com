/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const config = require('./gatsby-config')

exports.onCreatePage = async ({ page, actions }) => {
  const { path } = page
  const isBlogPost = path.includes('post')
  const isProjectPost = path.includes('project') && page.path !== '/projects/'
  // Generate pages for each lang for pages that are not inside posts or projects,
  if (!isBlogPost && !isProjectPost) {
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
  // For posts and projects pages langKey and path will be alright
  // since we're using gatsby i18n and mdx plugins
}
