import React from 'react'

import Footer from 'layout/components/Footer'
import Header from './components/Header'

import { Container, Content } from './styles'

interface IProps {
  children: React.ReactNode
}

function HomeLayout({ children }: IProps) {
  return (
    <>
      <Container>
        <Header />
        <Content>{children}</Content>
      </Container>
      <Footer />
    </>
  )
}

export default HomeLayout
