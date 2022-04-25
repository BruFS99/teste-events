/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react'
import { AxiosResponse } from 'axios'

import HeroService, { IHeroResponse, IHero } from 'services/Hero'

interface IUserHeroes {
  orderBy?: string
  search?: string | null
  limit?: number | null
}

function useHeroes({
  orderBy = 'name',
  search = null,
  limit = 20,
}: IUserHeroes) {
  const [total, setTotal] = useState(0)
  const [offset, setOffset] = useState(0)
  const [loadingMore, setLoadingMore] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [heroes, setHeroes] = useState<IHero[]>([])

  const handleSuccess = (
    response: AxiosResponse<IHeroResponse>
  ): AxiosResponse<IHeroResponse> => {
    const { data } = response
    const { results, total: totalHeroes } = data.data

    setHeroes(results)
    setTotal(totalHeroes)

    return response
  }

  const handleError = () => setError(true)

  const handleFinally = () => setLoading(false)

  const handleFinallyLoadingMore = () => setLoadingMore(false)

  const getParamsFetch = () => {
    const params = {
      nameStartsWith: search,
      orderBy,
      offset,
      limit,
    }

    if (!params.nameStartsWith) {
      const { nameStartsWith, ...rest } = params
      return rest
    }

    return params
  }

  const getDefaultParamsFetch = () => {
    const params = getParamsFetch()
    return { ...params, offset: 0 }
  }

  const getUpdateParamsFetch = () => {
    const params = getParamsFetch()

    const newOffset = offset + (limit || 0)
    const newParams = { ...params, offset: newOffset }

    return newParams
  }

  const fetchData = (params?: Object) => HeroService.getHeroes(params)

  const handleAddHeroes = (
    response: AxiosResponse<IHeroResponse>,
    addInState: boolean
  ) => {
    if (!addInState) {
      return
    }

    const { data } = response.data
    const { results } = data
    const newData = [...heroes, ...results]
    setHeroes(newData)
  }

  const getAndSetData = (params?: Object, addInState?: boolean) =>
    fetchData(params)
      .then(handleSuccess)
      .then((response) => handleAddHeroes(response, Boolean(addInState)))
      .catch(handleError)
      .finally(handleFinally)

  const loadMore = () => {
    if (!limit) {
      return
    }

    setLoadingMore(true)

    const params = getUpdateParamsFetch()
    const { offset: newOffset } = params
    setOffset(newOffset)

    getAndSetData(params, true).finally(handleFinallyLoadingMore)
  }

  const getNextPage = () => {
    loadMore()
  }

  const firstFetch = () => {
    setLoading(true)

    // essa parte aqui ta uma vergonha, mas não consegui pensar um bom jeito de codar isso
    const params = getDefaultParamsFetch()
    setOffset(0)

    getAndSetData(params).finally(handleFinally)
  }

  useEffect(() => {
    firstFetch()
  }, [orderBy, search])

  return {
    loading,
    error,
    heroes,
    hasMore: total > heroes.length,
    getNextPage,
    loadingMore,
    total,
  }
}

export default useHeroes
