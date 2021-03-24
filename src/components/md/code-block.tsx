import { SimpleGrid } from '@chakra-ui/layout'
import Highlight, { defaultProps, Language } from 'prism-react-renderer'
import theme from 'prism-react-renderer/themes/nightOwl'
import React from 'react'
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live'

type Props = {
  children: string
  className: Language
  metastring: string
} & { [key: string]: Boolean }

const re = /{([\d,-]+)}/

const calculateLinesToHighlight = (meta: string) => {
  if (!re.test(meta)) {
    return () => false
  } else {
    const lineNumbers = re
      .exec(meta)![1]
      .split(',')
      .map(v => v.split('-').map(v => parseInt(v, 10)))

    return (index: number) => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start,
      )
      return inRange
    }
  }
}

export default ({ children, className, metastring, live }: Props) => {
  let language = className.replace(/language-/, '')
  const shouldHighlightLine = calculateLinesToHighlight(metastring)

  if (live) {
    return (
      <LiveProvider code={children} theme={theme}>
        <SimpleGrid columns={{ md: 2 }}>
          <LiveEditor />
          <LivePreview />
        </SimpleGrid>
        <LiveError />
      </LiveProvider>
    )
  }

  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language as Language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px' }}>
          {tokens.map((line, i) => {
            const lineProps = getLineProps({ line, key: i })
            if (shouldHighlightLine(i)) {
              lineProps.className = `${lineProps.className} highlight-code-line`
            }
            if (i === tokens.length - 1) return
            return (
              <div key={i} {...lineProps}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            )
          })}
        </pre>
      )}
    </Highlight>
  )
}
