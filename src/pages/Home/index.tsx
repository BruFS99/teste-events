import HomeLayout from 'layout/Home'

import Button from 'components/atoms/Button'
import FormSearch from 'components/molecules/FormSearch'
import SectionHeroes from 'components/organisms/SectionHeroes'

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

  const { getNextPage, total, heroes, loading, error, hasMore, loadingMore } =
    useHeroes({
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

  const showLoadMore =
    !favoriteHeroesIsVisible && hasMore && !loading && !loadingMore

  const totalHeroes = favoriteHeroesIsVisible ? listHeroes.length : total

  return (
    <HomeLayout>
      <Content>
        <WrapperForm>
          <FormSearch initialValue={initialValue} onSubmit={handleSubmit} />
        </WrapperForm>
        <SectionHeroes
          totalHeroes={totalHeroes}
          listHeroes={listHeroes}
          isOrderByName={isOrderByName}
          loading={loading}
          loadingMore={loadingMore}
          error={error}
          handleToggleOrderByName={handleToggleOrderByName}
          favoriteHeroesIsVisible={favoriteHeroesIsVisible}
          handleToggleVisibleFavoritHeroes={handleToggleVisibleFavoritHeroes}
          handleFavoriteChange={handleFavoriteChange}
          handleClickHeroCard={handleClickHeroCard}
        />
        {showLoadMore ? (
          <Button onClick={getNextPage}>Carregar mais</Button>
        ) : null}
      </Content>
    </HomeLayout>
  )
}

export default Home
