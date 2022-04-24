import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'

import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import ListHeroes from 'components/molecules/ListHeroes'

import useHeroes from 'hooks/useHeroes'
import useFavoriteHeroes from 'store/ducks/FavoriteHeroes/useFavoritesHeroes'
import useOrderByName from 'components/organisms/SectionHeroes/hooks/useOrderByName'

import { IHero } from 'services/Hero'
import { IRootState } from 'store/ducks/rootReducer'

import { Container, Header, WrapperActions, TextInfo } from './styles'
import useFavoritesVisible from './hooks/useFavoritesVisible'
import useHeroesVisible from './hooks/useHeroesVisible'

function SectionHeroes() {
  const [searchParams] = useSearchParams()

  const { OrderByListHeroes, FavoriteHeroes } = useSelector(
    (state: IRootState) => state
  )
  const { orderBy } = OrderByListHeroes
  const { favorites: favoriteHeroes } = FavoriteHeroes

  const search = searchParams.get('search')

  const { heroes, loading, error } = useHeroes({
    orderBy,
    search,
  })

  const { handleAddFavoriteHero, handleRemoveFavoriteHero } =
    useFavoriteHeroes()

  const { handleToggleOrderByName, isOrderByName } = useOrderByName()

  const {
    isVisible: favoriteHeroesIsVisible,
    handleToggle: handleToggleVisibleFavoritHeroes,
  } = useFavoritesVisible()

  const handleFavoriteChange = (hero: IHero, newValueFavorite: boolean) => {
    if (newValueFavorite) {
      handleAddFavoriteHero(hero)
    } else {
      handleRemoveFavoriteHero(hero.id)
    }
  }

  const { listHeroes } = useHeroesVisible({
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
      />
    </Container>
  )
}

export default SectionHeroes
