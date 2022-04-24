import React from 'react'

import Footer from 'layout/components/Footer'
import Header from './components/Header'

import { Container, Content, WrapperHeader } from './styles'

interface IProps {
  children: React.ReactNode
}

function HeroDetailsLayout({ children }: IProps) {
  return (
    <Container>
      <WrapperHeader>
        <Header />
      </WrapperHeader>
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default HeroDetailsLayout
