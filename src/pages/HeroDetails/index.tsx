import { useParams } from 'react-router-dom'

import HeroDetailsLayout from 'layout/HeroDetails'

import Loading from 'components/atoms/Loading'
import SectionHero from 'components/organisms/SectionHero'
import ListComics from 'components/organisms/ListComics'

import useHero from 'hooks/useHero'
import useHeroComics from 'hooks/useHeroComics'
import useFavoriteHeroes from 'store/ducks/FavoriteHeroes/useFavoritesHeroes'

import { IHero } from 'services/Hero'

import { Container, ContainerLoading } from './styles'

function HeroDetails() {
  const { id } = useParams()

  const { hero, loading } = useHero({ id })
  const { comics, dateLastComic } = useHeroComics({ id })

  const { favorites, handleFavoriteChange } = useFavoriteHeroes()

  const findHeroById = (heroFavorite: IHero) => String(heroFavorite.id) === id

  const isFavorite = Boolean(favorites.find(findHeroById))

  if (loading) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    )
  }

  return (
    <HeroDetailsLayout>
      <Container>
        <SectionHero
          isFavorite={isFavorite}
          onChangeFavorite={handleFavoriteChange}
          hero={hero}
          dateLastComic={dateLastComic}
        />
        <ListComics comics={comics} />
      </Container>
    </HeroDetailsLayout>
  )
}

export default HeroDetails
