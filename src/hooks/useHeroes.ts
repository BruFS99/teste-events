import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import HeroService, { IListHeroResponse, IHero } from 'services/Hero'

function useHeroes() {
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

    HeroService.getHeroes()
      .then(handleSuccess)
      .catch(handleError)
      .finally(handleFinally)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return {
    loading,
    error,
    heroes,
  }
}

export default useHeroes
