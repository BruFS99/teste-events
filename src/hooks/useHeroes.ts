import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import HeroService, { IHeroResponse, IHero } from 'services/Hero'

interface IUserHeroes {
  orderBy?: string
  search?: string | null
}

function useHeroes({ orderBy = 'name', search = null }: IUserHeroes) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [heroes, setHeroes] = useState<IHero[]>([])

  const handleSuccess = (response: AxiosResponse<IHeroResponse>) => {
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

  const getParamsFetch = () => {
    const params = {
      nameStartsWith: search,
      orderBy,
    }

    if (!params.nameStartsWith) {
      const { nameStartsWith, ...rest } = params
      return rest
    }

    return params
  }

  const fetchData = () => {
    setLoading(true)

    const params = getParamsFetch()

    HeroService.getHeroes(params)
      .then(handleSuccess)
      .catch(handleError)
      .finally(handleFinally)
  }

  useEffect(() => {
    fetchData()
  }, [orderBy, search])

  return {
    loading,
    error,
    heroes,
  }
}

export default useHeroes
