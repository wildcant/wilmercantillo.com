import Icon from '@chakra-ui/icon'
import { Box } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import React, { ChangeEventHandler, FormEventHandler } from 'react'
import { FaSearch } from 'react-icons/fa'

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
  font-family: 'Josefin Sans';
  &:focus {
    outline: none;
  }
`

type SearchBoxTypes = {
  isLight: boolean
  onSubmit: FormEventHandler
  value: string
  onChange: ChangeEventHandler<HTMLInputElement>
  placeholder: string
}

export const SearchBox = ({
  isLight,
  onSubmit,
  value,
  onChange,
  placeholder,
}: SearchBoxTypes) => (
  <Box
    width="100%"
    height="4rem"
    maxWidth="628px"
    margin="0 auto"
    borderRadius="8px"
    boxShadow={
      isLight
        ? '0px 8px 20px rgb(0 0 0 / 6%)'
        : '0px 8px 20px rgb(255 255 255 / 6%)'
    }
    position="relative"
  >
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
        placeholder={`${placeholder}...`}
        onChange={e => onChange(e)}
        value={value}
      />
    </Form>
  </Box>
)
