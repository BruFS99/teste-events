import Error from 'components/atoms/Error'
import Loading from 'components/atoms/Loading'
import HeroCard from 'components/molecules/HeroCard'

import { IHero } from 'services/Hero'

import { Container, WrapperAvailableSpace } from './styles'

interface IListHeroes {
  loading: boolean
  error: boolean
  heroes: IHero[]
  onChangeFavorite: Function
}

function ListHeroes({ heroes, loading, error, onChangeFavorite }: IListHeroes) {
  if (loading) {
    return (
      <WrapperAvailableSpace>
        <Loading />
      </WrapperAvailableSpace>
    )
  }

  if (error) {
    return (
      <WrapperAvailableSpace>
        <Error text="Houve um erro ao tentar buscar os dados." />
      </WrapperAvailableSpace>
    )
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
