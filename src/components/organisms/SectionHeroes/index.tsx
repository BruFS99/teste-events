import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import ListHeroes from 'components/molecules/ListHeroes'

import useHeroes from 'hooks/useHeroes'
import useFavoriteHeroes from 'store/ducks/FavoriteHeroes/useFavoritesHeroes'
import useOrderByName from 'components/organisms/SectionHeroes/hooks/useOrderByName'

import useSearch from 'hooks/useSearch'
import useFavoritesVisible from './hooks/useFavoritesVisible'
import useHeroesVisible from './hooks/useHeroesVisible'

import { Container, Header, WrapperActions, TextInfo } from './styles'

function SectionHeroes() {
  const { searchParams } = useSearch()
  const search = searchParams.get('search')

  const { handleToggleOrderByName, isOrderByName } = useOrderByName()

  const { heroes, loading, error } = useHeroes({
    orderBy: isOrderByName ? 'name' : '-name',
    search,
  })

  const { favorites: favoriteHeroes, handleFavoriteChange } =
    useFavoriteHeroes()

  const {
    isVisible: favoriteHeroesIsVisible,
    handleToggle: handleToggleVisibleFavoritHeroes,
  } = useFavoritesVisible()

  const { listHeroes, handleClickHeroCard } = useHeroesVisible({
    favoriteHeroes,
    heroes,
    favoriteHeroesIsVisible,
    isOrderByName,
    search,
  })

  return (
    <Container>
      <Header>
        <TextInfo>Encontrados {listHeroes.length} heróis</TextInfo>
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
    </Container>
  )
}

export default SectionHeroes
