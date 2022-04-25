import FormSearch from 'components/molecules/FormSearch'
import useSearch from 'hooks/useSearch'

import Logo from 'assets/logo_menor.svg'

import { Container, Brand } from './styles'

function Header() {
  const { handleSubmit, searchParams } = useSearch()

  const search = searchParams.get('search')

  const initialValue = search ? String(search) : ''

  return (
    <Container>
      <Brand src={Logo} alt="Logo marvel" />
      <FormSearch initialValue={initialValue} onSubmit={handleSubmit} isLight />
    </Container>
  )
}

export default Header
