import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import HeroService, { IHeroResponse, IHero } from 'services/Hero'

interface IUseHero {
  id: string | undefined
}

function useHero({ id }: IUseHero) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [hero, setHero] = useState<IHero | null>(null)

  const handleSuccess = (response: AxiosResponse<IHeroResponse>) => {
    const { data } = response
    const { results } = data.data

    setHero(results[0])
  }

  const handleError = () => {
    console.error(error)
    setError(true)
  }

  const handleFinally = () => {
    setLoading(false)
  }
  const fetchData = () => {
    if (!id) {
      return
    }

    setLoading(true)

    HeroService.getHeroById(id)
      .then(handleSuccess)
      .catch(handleError)
      .finally(handleFinally)
  }

  useEffect(() => {
    fetchData()
  }, [id])

  return {
    loading,
    error,
    hero,
  }
}

export default useHero
