import { Button } from '@chakra-ui/button'
import {
  Menu,
  MenuButton,
  MenuItemOption,
  MenuList,
  MenuOptionGroup,
} from '@chakra-ui/menu'
import React from 'react'
import { MdSort } from 'react-icons/md'
import { connectSortBy, MenuProvided } from 'react-instantsearch-core'

type SortByMenuProps = MenuProvided & {
  btnText: string
  optionGroupTitle: string
}

const SortByMenu = ({
  btnText,
  optionGroupTitle,
  items,
  refine,
}: SortByMenuProps) => {
  return (
    <Menu>
      <MenuButton
        as={Button}
        boxShadow="0px 0px 0px 1px #e7e7e9 inset"
        borderRadius="8px"
        padding="0.4em 1.6em"
        fontWeight="normal"
        textTransform="capitalize"
        leftIcon={<MdSort />}
        marginRight="1rem"
      >
        {btnText}
      </MenuButton>
      <MenuList minWidth="240px">
        <MenuOptionGroup
          defaultValue={items[0].value}
          title={optionGroupTitle}
          type="radio"
        >
          {items.map(item => (
            <MenuItemOption
              key={item.value}
              value={item.value}
              onClick={event => {
                event.preventDefault()
                refine(item.value)
              }}
            >
              {item.label}
            </MenuItemOption>
          ))}
        </MenuOptionGroup>
      </MenuList>
    </Menu>
  )
}

export default connectSortBy(SortByMenu)
