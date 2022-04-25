import Logo from 'assets/logo.svg'

import { Image, Container, SubTitle, Text } from './styles'

function Header() {
  return (
    <Container>
      <Image src={Logo} alt="logo" />
      <SubTitle>Explore o universo</SubTitle>
      <Text>
        Mergulhe no domínio deslumbrante de todos personagens clássicos que você
        ama - e aqueles que você descobrirá em breve!
      </Text>
    </Container>
  )
}

export default Header
