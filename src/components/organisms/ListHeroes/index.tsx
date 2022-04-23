import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'

import { Container, Header, WrapperActions, TextInfo } from './styles'

function ListHeroes() {
  return (
    <Container>
      <Header>
        <TextInfo>Encontrados 20 heróis</TextInfo>
        <WrapperActions>
          <OrderByName />
          <OnlyFavorites />
        </WrapperActions>
      </Header>
    </Container>
  )
}

export default ListHeroes
