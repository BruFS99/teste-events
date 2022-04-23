import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import ListHeroes from 'components/molecules/ListHeroes'

import useHeroes from 'hooks/useHeroes'

import { Container, Header, WrapperActions, TextInfo } from './styles'

function SectionHeroes() {
  const { heroes, loading, error } = useHeroes()

  return (
    <Container>
      <Header>
        <TextInfo>Encontrados {heroes.length} heróis</TextInfo>
        <WrapperActions>
          <OrderByName />
          <OnlyFavorites />
        </WrapperActions>
      </Header>
      <ListHeroes heroes={heroes} loading={loading} error={error} />
    </Container>
  )
}

export default SectionHeroes
