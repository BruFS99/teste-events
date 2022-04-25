import React from 'react'

import Footer from 'layout/components/Footer'
import Header from './components/Header'

import { Container, Content, Wrapper } from './styles'

interface IProps {
  children: React.ReactNode
}

function HomeLayout({ children }: IProps) {
  return (
    <Container>
      <Wrapper>
        <Header />
        <Content>{children}</Content>
      </Wrapper>
      <Footer />
    </Container>
  )
}

export default HomeLayout
