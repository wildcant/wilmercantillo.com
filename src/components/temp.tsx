import { useColorMode } from '@chakra-ui/color-mode'
import Icon from '@chakra-ui/icon'
import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import React, { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FaSearch } from 'react-icons/fa'

const SearchContainer = styled(Box)`
  width: 100%;
  height: 4rem;
  max-width: 628px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${props =>
    props.isLight
      ? '0px 8px 20px rgb(0 0 0 / 6%)'
      : '0px 8px 20px rgb(255 255 255 / 6%)'};
  position: relative;
`
const Form = styled.form`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`

const Input = styled.input`
  background: transparent;
  height: 100%;
  width: 100%;
  padding-left: 4rem;
  &:focus {
    outline: none;
  }
`

export default function Search() {
  const { t } = useTranslation()
  const [query, setQuery] = useState('')
  const { colorMode } = useColorMode()

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
  }

  return (
    <SearchContainer isLight={colorMode === 'light'}>
      <Icon
        as={FaSearch}
        position="absolute"
        top="50%"
        left="2rem"
        transform="translateY(-50%)"
        color="gray.300"
      />
      <Form onSubmit={onSubmit}>
        <Input
          placeholder={`${t('blog.searchPlaceholder')}...`}
          onChange={e => setQuery(e.target.value)}
          value={query}
        />
      </Form>
    </SearchContainer>
  )
}
