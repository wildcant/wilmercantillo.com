import loadable from '@loadable/component'
import Layout from 'components/layout'
import { ComponentSizer } from 'components/styled/generic'
import React from 'react'

const Search = loadable(() => import('components/search'))

export default function Blog() {
  return (
    <Layout>
      <ComponentSizer>
        <Search />
      </ComponentSizer>
    </Layout>
  )
}
