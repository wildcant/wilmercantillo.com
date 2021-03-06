import { Box, BoxProps } from '@chakra-ui/layout'
import React from 'react'
import { BlogPost } from 'src/types'

type Props = BoxProps & BlogPost
type BlogPostProps = Props & {
  size: 'sm' | 'md' | 'lg'
}

export default function BlogCard({ size, ...props }: BlogPostProps) {
  switch (size) {
    case 'sm':
      return <SmallBlogCard {...props} />
    case 'lg':
      return <LargeBlogCard {...props} />
    case 'md':
      return <MediumBlogCard {...props} />
  }
}

const SmallBlogCard = (props: Props) => (
  <Box>
    <div>{props.children}</div>
  </Box>
)

const MediumBlogCard = (props: Props) => (
  <Box>
    <div>{props.children}</div>
  </Box>
)

const LargeBlogCard = (props: Props) => (
  <Box>
    <div>{props.children}</div>
  </Box>
)
