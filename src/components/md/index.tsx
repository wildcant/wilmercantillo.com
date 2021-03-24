import { MDXProviderComponents } from '@mdx-js/react'
import { PageProps } from 'gatsby'
import React from 'react'
import { BlogPost, Image, ProjectPost } from 'src/types'
import Footer from '../footer'
import Header from '../header'
import BlogPostLayout from './blog-layout'
import CodeBlock from './code-block'
import Headings from './headings'
import ProjectPostLayout from './project-layout'
import Text from './text'

export const components: MDXProviderComponents = {
  h1: Headings.H1,
  h2: Headings.H2,
  h3: Headings.H3,
  h4: Headings.H4,
  h5: Headings.H5,
  h6: Headings.H6,
  p: Text.Paragraph,
  code: CodeBlock,
}

type Props = PageProps & {
  data: Image
  pageContext: {
    frontmatter: BlogPost &
      ProjectPost & {
        type: 'project' | 'post'
      }
  }
}

export default function MdLayout(props: Props) {
  const post = props.pageContext.frontmatter
  const banner = props.data?.banner

  return (
    <>
      <Header />
      {post.type === 'project' ? (
        <ProjectPostLayout {...post} banner={banner}>
          {props.children}
        </ProjectPostLayout>
      ) : (
        <BlogPostLayout {...post} banner={banner}>
          {props.children}
        </BlogPostLayout>
      )}
      <Footer />
    </>
  )
}
