import FormSearch from 'components/molecules/FormSearch'
import SectionHeroes from 'components/organisms/SectionHeroes'
import HomeLayout from 'layout/Home'

import useSearch from 'hooks/useSearch'

import useOrderByName from 'hooks/useOrderByName'
import useHeroes from 'hooks/useHeroes'
import useFavoriteHeroes from 'store/ducks/FavoriteHeroes/useFavoritesHeroes'
import useFavoritesVisible from 'hooks/useFavoritesVisible'
import useHeroesVisible from 'hooks/useHeroesVisible'

import { Content, WrapperForm } from './styles'

function Home() {
  const { handleSubmit } = useSearch()

  const { searchParams } = useSearch()
  const search = searchParams.get('search')
  const initialValue = search ? String(search) : ''

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
    <HomeLayout>
      <Content>
        <WrapperForm>
          <FormSearch initialValue={initialValue} onSubmit={handleSubmit} />
        </WrapperForm>
        <SectionHeroes
          listHeroes={listHeroes}
          isOrderByName={isOrderByName}
          loading={loading}
          error={error}
          handleToggleOrderByName={handleToggleOrderByName}
          favoriteHeroesIsVisible={favoriteHeroesIsVisible}
          handleToggleVisibleFavoritHeroes={handleToggleVisibleFavoritHeroes}
          handleFavoriteChange={handleFavoriteChange}
          handleClickHeroCard={handleClickHeroCard}
        />
      </Content>
    </HomeLayout>
  )
}

export default Home
