import { useColorMode } from '@chakra-ui/color-mode'
import algoliasearch from 'algoliasearch'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaSearch, FaTimes } from 'react-icons/fa'
import { connectStateResults, InstantSearch } from 'react-instantsearch-core'
import { Hits } from 'react-instantsearch-dom'
import { BlogPost } from 'src/types'
import { defaultLanguage } from '../../translations'
import BlogCard from '../blog-card'
import { useLangContext } from '../lang-context'
import { BlogCardListContainer, SearchBox } from '../styled/searchStyled'
import Filters from './filters'
import Skeleton from './skeleton'

const esIndexName = 'BLOG_es'
const enIndexName = 'BLOG_en'

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID || '',
  process.env.GATSBY_ALGOLIA_SEARCH_KEY || '',
)

const BlogPostsPlaceholder = connectStateResults(
  ({ searchResults, searching }) => {
    const [isInitialSearch, setInitialSearch] = useState(true)

    if (searchResults && isInitialSearch) {
      setInitialSearch(false)
    }

    if (searching && isInitialSearch) {
      return <Skeleton />
    }
    return null
  },
)

export default function Search() {
  const { t } = useTranslation()
  const lang = useLangContext()
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'
  const indexName = lang === defaultLanguage ? esIndexName : enIndexName

  return (
    <InstantSearch indexName={indexName} searchClient={searchClient}>
      <SearchBox
        translations={{ placeholder: t('blog.searchPlaceholder') }}
        submit={<FaSearch />}
        reset={<FaTimes />}
        theme={isLight}
      />
      <Filters indexName={indexName} attribute="categories" />
      <BlogPostsPlaceholder />
      <BlogCardListContainer>
        <Hits hitComponent={SearchableBlogCard} />
      </BlogCardListContainer>
    </InstantSearch>
  )
}

type HitProps = {
  hit: BlogPost
}

const SearchableBlogCard = (props: HitProps) => (
  <BlogCard isSearchResult={true} size="lg" {...props.hit} />
)
