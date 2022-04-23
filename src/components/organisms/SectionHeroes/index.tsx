import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import ListHeroes from 'components/molecules/ListHeroes'

import useHeroes from 'hooks/useHeroes'

import { useSelector } from 'react-redux'
import { IRootState } from 'store/ducks/rootReducer'

import { Container, Header, WrapperActions, TextInfo } from './styles'

function SectionHeroes() {
  const { OrderByListHeroes } = useSelector((state: IRootState) => state)
  const { orderBy } = OrderByListHeroes

  const { heroes, loading, error } = useHeroes({ orderBy })

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
