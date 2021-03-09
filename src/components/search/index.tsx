import { useColorMode } from '@chakra-ui/color-mode'
import { useBoolean } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { Box, Flex, Text } from '@chakra-ui/layout'
import { PageProps } from 'gatsby'
import queryString from 'query-string'
import React, { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFilter } from 'react-icons/bs'
import Link from '../link'
import { SearchBox } from './searchbox'

const postsCategories = ['All', 'React', 'Javascript', 'Web']

export default function Search({ location }: PageProps) {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const { colorMode } = useColorMode()
  const [filtersOpen, filterActions] = useBoolean(false)
  const queryStr = queryString.parse(location.search)

  const isLight = colorMode === 'light'
  const categoryQuery = queryStr.category

  const handleSearch = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <>
      <SearchBox
        isLight={isLight}
        onSubmit={handleSearch}
        value={query}
        onChange={e => setQuery(e.target.value)}
        placeholder={t('blog.searchPlaceholder')}
      />
      <Flex
        width="100%"
        justify={{ base: 'space-between' }}
        align="center"
        wrap={{ base: 'wrap', md: 'nowrap' }}
        margin="1rem 0"
      >
        <Box />
        <Flex
          order={{ base: 3, md: 2 }}
          width="100%"
          margin={{ base: '1rem 0', md: '0' }}
          padding={{ base: '1rem 0', md: '0' }}
          borderTop={{ base: '1px solid', md: 'none' }}
          borderColor="gray.200"
        >
          {postsCategories.map(category => (
            <Box
              key={category}
              margin="0 0.8rem"
              padding="0.4em 0.6em"
              boxShadow={category === categoryQuery ? 'md' : ''}
              fontWeight={category === categoryQuery ? 'bold' : ''}
            >
              <Link to={`/blog?category=${category}`}>
                <Text>{category}</Text>
              </Link>
            </Box>
          ))}
        </Flex>
        <Box
          as="button"
          order={{ base: 2, md: 3 }}
          boxShadow="0px 0px 0px 1px #e7e7e9 inset"
          borderRadius="8px"
          d="flex"
          alignItems="center"
          padding="0.4em 1em"
          marginLeft="1rem"
          background={filtersOpen ? '#f3f3f4' : 'transparent'}
          _hover={{
            boxShadow: '0px 0px 0px 1px #d4d4d4 inset',
          }}
          _focus={{
            boxShadow: '0px 0px 0px 1px #d4d4d4 inset',
          }}
          _active={{
            boxShadow: '0px 0px 0px 1px #e7e7e9 inset',
          }}
          onClick={filterActions.toggle}
        >
          <Icon as={BsFilter} marginRight="0.4em" />
          <Text>{t('blog.filters')}</Text>
        </Box>
      </Flex>
    </>
  )
}
