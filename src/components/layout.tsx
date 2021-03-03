import React, { ReactNode } from 'react'
import Footer from './footer'
import Header from './header'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
