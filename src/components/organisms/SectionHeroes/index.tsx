import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import ListHeroes from 'components/molecules/ListHeroes'

import { IHero } from 'services/Hero'

import { Container, Header, WrapperActions, TextInfo } from './styles'

interface ISectionHeroesProps {
  listHeroes: IHero[]
  isOrderByName: boolean
  loading: boolean
  error: boolean
  favoriteHeroesIsVisible: boolean
  handleToggleOrderByName: Function
  handleToggleVisibleFavoritHeroes: Function
  handleFavoriteChange: Function
  handleClickHeroCard: Function
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
}: ISectionHeroesProps) {
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
