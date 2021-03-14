import { useColorMode } from '@chakra-ui/color-mode'
import { Box, Flex, Text } from '@chakra-ui/layout'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { connectMenu, MenuProvided } from 'react-instantsearch-core'
import SortBy from './sort'

type Item = {
  count?: number
  isRefined: boolean
  label: string
  value: string
}

type FiltersProps = MenuProvided & {
  indexName: string
}

function Filters(props: FiltersProps) {
  const { items, refine, indexName } = props
  const { t } = useTranslation()
  const [allItem, setAllItem] = useState<Item>({
    label: t('blog.all'),
    value: 'all',
    isRefined: true,
  })
  const { colorMode } = useColorMode()
  const isLight = colorMode === 'light'

  const indexDateAsc = `${indexName}_date_asc`
  const indexDateDesc = `${indexName}_date_desc`

  return (
    <Flex
      width="100%"
      justify={{ base: 'space-between' }}
      align="center"
      wrap={{ base: 'wrap', md: 'nowrap' }}
      margin="1rem 0"
    >
      <SortBy
        btnText={t('blog.orderBy')}
        optionGroupTitle={t('blog.uploadDate')}
        defaultRefinement={indexDateDesc}
        items={[
          { label: t('blog.descending'), value: indexDateDesc },
          { label: t('blog.ascending'), value: indexDateAsc },
        ]}
      />
      <Flex
        order={{ base: 3, md: 2 }}
        width="100%"
        margin={{ base: '1rem 0', md: '0' }}
        padding={{ base: '1rem 0', md: '0.4rem 0' }}
        borderTop={{ base: '1px solid', md: 'none' }}
        borderColor="gray.200"
        overflowX="auto"
      >
        <Box
          margin="0 0.8rem"
          padding="0.4em 0.6em"
          boxShadow={allItem.isRefined ? 'md' : ''}
          fontWeight={allItem.isRefined ? 'bold' : ''}
          cursor="pointer"
          _hover={{
            background: isLight ? 'gray.100' : 'black',
          }}
          onClick={() => {
            setAllItem(prevState => ({ ...prevState, isRefined: true }))
            refine()
          }}
        >
          <Text>{allItem.label}</Text>
        </Box>
        {items.map(item => (
          <Box
            key={item.value}
            margin="0 0.8rem"
            padding="0.4em 0.6em"
            boxShadow={item.isRefined ? 'md' : ''}
            fontWeight={item.isRefined ? 'bold' : ''}
            cursor="pointer"
            _hover={{
              background: isLight ? 'gray.100' : 'black',
            }}
            onClick={() => {
              setAllItem(prevState => ({ ...prevState, isRefined: false }))
              refine(item.value)
            }}
          >
            <Text>{item.label}</Text>
          </Box>
        ))}
      </Flex>
      {/*
      TODO - Feature idea: More filters
      <Button
        boxShadow="0px 0px 0px 1px #e7e7e9 inset"
        borderRadius="8px"
        padding="0.4em 1.6em"
        fontWeight="normal"
        textTransform="capitalize"
        leftIcon={<BsFilter />}
        order={{ base: 2, md: 3 }}
        onClick={filterActions.toggle}
        background={filtersOpen ? '#f3f3f4' : 'transparent'}
        marginLeft="1rem"
      >
        {t('blog.filters')}
      </Button>
       */}
    </Flex>
  )
}

export default connectMenu(Filters)
