import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import HeroService, { IComic, IComicDate, IComicsResponse } from 'services/Hero'
import { getDateFormatedBR } from 'utils/Date'

interface IQueryProps {
  limit?: string
  orderBy?: string
  offset?: string
}

interface IUseHeroComics extends IQueryProps {
  id: string | undefined
}

function useHeroComics({
  id,
  limit = '10',
  orderBy = '-onsaleDate',
  offset = '0',
}: IUseHeroComics) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [comics, setComics] = useState<IComic[] | null>(null)

  const getLastDateComic = (date: IComicDate) => date.type === 'onsaleDate'

  const lastComic = comics?.length ? comics[0] : null
  const dateLastComic = lastComic?.dates?.find(getLastDateComic)?.date || ''
  const dateLastComicFormatted = getDateFormatedBR(dateLastComic)

  const handleSuccess = (response: AxiosResponse<IComicsResponse>) => {
    const { data } = response
    const { results } = data.data

    setComics(results)
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
      limit,
      orderBy,
      offset,
    }

    return params
  }

  const fetchData = () => {
    if (!id) {
      return
    }

    setLoading(true)

    const params = getParamsFetch()

    HeroService.getHeroComics(id, params)
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
    comics,
    dateLastComic: dateLastComicFormatted,
  }
}

export default useHeroComics
