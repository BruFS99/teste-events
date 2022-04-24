import { useSearchParams } from 'react-router-dom'
import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import ListHeroes from 'components/molecules/ListHeroes'

import useHeroes from 'hooks/useHeroes'

import { useSelector } from 'react-redux'
import { IRootState } from 'store/ducks/rootReducer'

import { Container, Header, WrapperActions, TextInfo } from './styles'

function SectionHeroes() {
  const [searchParams] = useSearchParams()
  const { orderBy } = OrderByListHeroes

  const search = searchParams.get('search')

  const { heroes, loading, error } = useHeroes({
    orderBy,
    search,
  })

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
