import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import HeroService, { IListHeroResponse, IHero } from 'services/Hero'

interface IUserHeroes {
  orderBy?: string
}

function useHeroes({ orderBy = 'name' }: IUserHeroes) {
  const [loading, setLoading] = useState(false)
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

    HeroService.getHeroes({
      orderBy,
    })
      .then(handleSuccess)
      .catch(handleError)
      .finally(handleFinally)
  }

  useEffect(() => {
    fetchData()
  }, [orderBy])

  return {
    loading,
    error,
    heroes,
  }
}

export default useHeroes
