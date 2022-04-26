import Button from 'components/atoms/Button'
import Loading from 'components/atoms/Loading'
import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import ListHeroes from 'components/molecules/ListHeroes'

import { IHero } from 'services/Hero'

import {
  Container,
  Header,
  WrapperActions,
  WrapperLoading,
  TextInfo,
} from './styles'

interface ISectionHeroesProps {
  listHeroes: IHero[]
  isOrderByName: boolean
  loading: boolean
  loadingMore?: boolean
  error: boolean
  favoriteHeroesIsVisible: boolean
  handleToggleOrderByName: Function
  handleToggleVisibleFavoritHeroes: Function
  handleFavoriteChange: Function
  handleClickHeroCard: Function
  totalHeroes: number
  showLoadMore: boolean
  getNextPage?: Function
}

function SectionHeroes({
  listHeroes,
  isOrderByName,
  loading,
  error,
  handleToggleOrderByName,
  favoriteHeroesIsVisible,
  handleToggleVisibleFavoritHeroes,
  handleFavoriteChange,
  handleClickHeroCard,
  loadingMore,
  totalHeroes = 0,
  showLoadMore = false,
  getNextPage,
}: ISectionHeroesProps) {
  const handleGetMore = () => {
    if (!getNextPage) {
      return
    }

    getNextPage()
  }

  return (
    <Container>
      <Header>
        <TextInfo>Encontrados {totalHeroes} heróis</TextInfo>
        <WrapperActions>
          <OrderByName
            value={isOrderByName}
            handleClick={handleToggleOrderByName}
          />
          <OnlyFavorites
            value={favoriteHeroesIsVisible}
            onChange={handleToggleVisibleFavoritHeroes}
          />
        </WrapperActions>
      </Header>
      <ListHeroes
        heroes={listHeroes}
        loading={loading}
        error={error}
        onChangeFavorite={handleFavoriteChange}
        onClick={handleClickHeroCard}
      />

      {showLoadMore ? (
        <Button onClick={handleGetMore}>Carregar mais</Button>
      ) : null}

      {loadingMore ? (
        <WrapperLoading>
          <Loading size="18px" />
        </WrapperLoading>
      ) : null}
    </Container>
  )
}

export default SectionHeroes
