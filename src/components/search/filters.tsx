import { useBoolean } from '@chakra-ui/hooks'
import Icon from '@chakra-ui/icon'
import { Box, Flex, Text } from '@chakra-ui/layout'
import queryString from 'query-string'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BsFilter } from 'react-icons/bs'
import { connectMenu, MenuProvided } from 'react-instantsearch-core'
import { useLocation } from 'react-use'
import Link from '../link'

type Item = {
  count?: number
  isRefined?: boolean
  label: string
  value: string
}

function Filters(props: MenuProvided) {
  const { items, refine } = props
  const { t } = useTranslation()
  const [filtersOpen, filterActions] = useBoolean(false)
  const location = useLocation()

  const allItem: Item = { label: t('blog.all'), value: 'all' }
  const queryStr = queryString.parse(location.search || '')
  const categoryQuery = queryStr.category ?? allItem.value

  useEffect(() => {
    if (items.find(({ value }) => value === categoryQuery)) {
      refine(categoryQuery)
    } else {
      refine()
    }
  }, [categoryQuery])

  return (
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
        overflowX="auto"
      >
        <Box
          margin="0 0.8rem"
          padding="0.4em 0.6em"
          boxShadow={categoryQuery === allItem.value ? 'md' : ''}
          fontWeight={categoryQuery === allItem.value ? 'bold' : ''}
        >
          <Link to={`/blog?category=${allItem.value}`}>
            <Text>{allItem.label}</Text>
          </Link>
        </Box>
        {items.map(item => (
          <Box
            key={item.value}
            margin="0 0.8rem"
            padding="0.4em 0.6em"
            boxShadow={item.isRefined ? 'md' : ''}
            fontWeight={item.isRefined ? 'bold' : ''}
          >
            <Link to={`/blog?category=${item.value}`}>
              <Text>{item.label}</Text>
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
  )
}

export default connectMenu(Filters)
