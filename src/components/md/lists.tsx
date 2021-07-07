import {
  ListItem,
  ListItemProps,
  ListProps,
  OrderedList,
  UnorderedList,
} from '@chakra-ui/layout'
import React from 'react'

export const OL = (props: ListProps) => {
  return (
    <OrderedList marginLeft="1.5em" {...props}>
      {props.children}
    </OrderedList>
  )
}

export const UL = (props: ListProps) => {
  return (
    <UnorderedList marginLeft="1.5em" listStyleType="circle" {...props}>
      {props.children}
    </UnorderedList>
  )
}

export const LI = (props: ListItemProps) => (
  <ListItem
    fontSize={{ base: '18px', md: '21px' }}
    lineHeight={{ base: '20px', md: '32px' }}
    {...props}
  >
    {props.children}
  </ListItem>
)

export default {
  UL,
  LI,
  OL,
}
