import { useEffect, useState } from 'react'

import { AxiosResponse } from 'axios'

import OrderByName from 'components/molecules/OrderByName'
import OnlyFavorites from 'components/molecules/OnlyFavorites'
import HeroCard from 'components/molecules/HeroCard'

import HeroService from 'services/Hero'

import {
  Container,
  Header,
  WrapperActions,
  TextInfo,
  WrapperList,
} from './styles'

interface IHero {
  id: number
  name: string
  thumbnail: {
    path: string
    extension: string
  }
}
interface IListHeroResponse {
  data: {
    count: string
    limit: string
    offset: string
    results: IHero[]
  }
}

function ListHeroes() {
  const [, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [heroes, setHeroes] = useState<IHero[]>([])

  const handleSuccess = (response: AxiosResponse<IListHeroResponse>) => {
    const { data } = response

    const { results } = data.data

    setHeroes(results)
  }

  const handleError = () => {
    console.error(error)
    setError(true)
  }

  const handleFinally = () => {
    setLoading(false)
  }

  const fetchData = () => {
    setLoading(true)

    HeroService.getHeroes()
      .then(handleSuccess)
      .catch(handleError)
      .finally(handleFinally)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <Container>
      <Header>
        <TextInfo>Encontrados {heroes.length} heróis</TextInfo>
        <WrapperActions>
          <OrderByName />
          <OnlyFavorites />
        </WrapperActions>
      </Header>
      <WrapperList>
        {heroes.map((hero) => (
          <HeroCard
            key={hero.id}
            name={hero.name}
            isFavorite={false}
            src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            onFavoriteChange={(value: boolean) => console.log(value)}
          />
        ))}
      </WrapperList>
    </Container>
  )
}

export default ListHeroes
