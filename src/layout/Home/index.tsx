import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'

import { Container, Content } from './styles'

interface IProps {
  children: React.ReactNode
}

function HomeLayout({ children }: IProps) {
  return (
    <Container>
      <Header />
      <Content>{children}</Content>
      <Footer />
    </Container>
  )
}

export default HomeLayout
