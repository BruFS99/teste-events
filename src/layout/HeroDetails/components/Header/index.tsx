import FormSearch from 'components/molecules/FormSearch'
import useSearch from 'hooks/useSearch'

import Logo from 'assets/logo_menor.svg'

import { Container, Brand } from './styles'

function Header() {
  const { handleSubmit } = useSearch()

  return (
    <Container>
      <Brand src={Logo} alt="Logo marvel" />
      <FormSearch onSubmit={handleSubmit} isLight />
    </Container>
  )
}

export default Header
