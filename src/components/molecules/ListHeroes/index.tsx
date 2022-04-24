import Loading from 'components/atoms/Loading'
import HeroCard from 'components/molecules/HeroCard'

import { IHero } from 'services/Hero'

import { Container, ContainerLoading } from './styles'

interface IListHeroes {
  loading: boolean
  error: boolean
  heroes: IHero[]
  onChangeFavorite: Function
}

function ListHeroes({ heroes, loading, error, onChangeFavorite }: IListHeroes) {
  if (loading) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    )
  }

  if (error) {
    return <h3>Error</h3>
  }

  return (
    <Container>
      {heroes.map((hero) => (
        <HeroCard
          key={hero.id}
          name={hero.name}
          isFavorite={Boolean(hero?.isFavorite)}
          src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
          onFavoriteChange={(isFavorite: boolean) =>
            onChangeFavorite(hero, isFavorite)
          }
        />
      ))}
    </Container>
  )
}

export default ListHeroes
