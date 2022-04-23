import HeroCard from 'components/molecules/HeroCard'

import { IHero } from 'services/Hero'

import { Container } from './styles'

interface IListHeroes {
  loading: boolean
  error: boolean
  heroes: IHero[]
  onChangeFavorite: Function
}

function ListHeroes({ heroes, loading, error, onChangeFavorite }: IListHeroes) {
  if (loading) {
    return <h3>Loading...</h3>
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
          isFavorite={false}
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
