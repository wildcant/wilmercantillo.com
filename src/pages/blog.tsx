import loadable from '@loadable/component'
import Layout from 'components/layout'
import { ComponentSizer } from 'components/styled/generic'
import React from 'react'
import SearchSkeleton from 'src/components/search/skeleton'
const Search = loadable(() => import('components/search'))

export default function Blog() {
  return (
    <Layout title="Blog - Wilmer Cantillo">
      <ComponentSizer minH="90vh">
        <Search fallback={<SearchSkeleton marginTop="8rem" />} />
      </ComponentSizer>
    </Layout>
  )
}
