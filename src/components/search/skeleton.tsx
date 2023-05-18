import { Box, BoxProps, Flex } from '@chakra-ui/layout'
import { Skeleton } from '@chakra-ui/skeleton'
import React from 'react'

const BlogCardSkeleton = () => (
  <Flex
    p={{ base: '2', md: '4' }}
    width="100%"
    minW="250px"
    maxW="650px"
    h={{ base: '120px', md: '160px' }}
    minH="6rem"
    margin="1rem 0"
    transition="background .3s,box-shadow .3s ease"
    boxShadow="xs"
    borderRadius="6px"
  >
    <Flex width="65%" direction="column" paddingRight="1rem">
      <Skeleton height="2rem" />
      <Skeleton height="3rem" margin="1rem 0" />
      <Skeleton height="1rem" />
    </Flex>
    <Flex width="35%">
      <Skeleton w="100%" h="100%" />
    </Flex>
  </Flex>
)

const SearchSkeleton = (props: BoxProps) => {
  return (
    <Box {...props}>
      <Flex direction="column" align="center">
        <BlogCardSkeleton />
        <BlogCardSkeleton />
      </Flex>
    </Box>
  )
}

export default SearchSkeleton
