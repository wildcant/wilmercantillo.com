import React, { ReactNode, useEffect, useState } from 'react'
import { useIntersection } from 'react-use'

export type IntersectionObserverProps = {
  children?: ReactNode
  reset?: boolean
}

export const IntersectionContext = React.createContext({ inView: true })

export const IntersectionObserver = ({
  children,
  reset = false,
}: IntersectionObserverProps) => {
  const [inView, setInView] = useState(false)
  const intersectionRef = React.useRef(null)
  const intersection = useIntersection(intersectionRef, {
    threshold: 0,
  })

  useEffect(() => {
    const inViewNow = intersection && intersection.intersectionRatio > 0
    if (inViewNow) {
      return setInView(inViewNow)
    } else if (reset) {
      return setInView(false)
    }
  }, [intersection, reset])

  return (
    <IntersectionContext.Provider value={{ inView }}>
      <div ref={intersectionRef}>{children}</div>
    </IntersectionContext.Provider>
  )
}
