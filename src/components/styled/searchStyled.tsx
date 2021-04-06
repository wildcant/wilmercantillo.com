import { Flex } from '@chakra-ui/layout'
import styled from '@emotion/styled'
import { SearchBox as ISearchBox } from 'react-instantsearch-dom'

export const SearchBox = styled(ISearchBox)`
  position: relative;
  width: 100%;
  height: 4rem;
  max-width: 628px;
  margin: 0 auto;
  border-radius: 8px;
  box-shadow: ${props =>
    props.theme
      ? '0px 8px 20px rgb(0 0 0 / 6%)'
      : '0px 8px 20px rgb(255 255 255 / 6%)'};

  button.ais-SearchBox-submit {
    position: absolute;
    top: 50%;
    left: 2rem;
    transform: translateY(-50%);
    color: gray.300;
  }
  form.ais-SearchBox-form {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
  input.ais-SearchBox-input {
    background: transparent;
    height: 100%;
    width: 100%;
    padding-left: 4rem;
    font-family: 'Recursive';
    &:focus {
      outline: none;
    }
  }
  input[type='search']::-webkit-search-cancel-button {
    -webkit-appearance: none;
  }

  button.ais-SearchBox-reset {
    position: absolute;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    color: gray.300;
  }
`

export const BlogCardListContainer = styled(Flex)`
  justify-content: center;
  min-height: 70vh;
  ul.ais-Hits-list {
    list-style: none;
  }
`
