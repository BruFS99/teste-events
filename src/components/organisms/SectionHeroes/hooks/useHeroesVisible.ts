import { useEffect, useState } from 'react'
import { IHero } from 'services/Hero'

interface IUseHeroesVisible {
  favoriteHeroesIsVisible: boolean
  favoriteHeroes: IHero[]
  heroes: IHero[]
  isOrderByName?: boolean
  search?: string | null
}

function useHeroesVisible({
  favoriteHeroes,
  favoriteHeroesIsVisible,
  heroes,
  isOrderByName,
  search,
}: IUseHeroesVisible) {
  const [listHeroes, setListHeroes] = useState<IHero[]>([])

  const hasSearch = search && favoriteHeroesIsVisible
  const hasSort = isOrderByName && favoriteHeroesIsVisible

  const setIsFavorite = (hero: IHero) => {
    const isFavorite = favoriteHeroes.find(({ id }) => id === hero.id)
    return {
      ...hero,
      isFavorite: Boolean(isFavorite),
    }
  }

  const sortByName = (heroA: IHero, heroB: IHero) =>
    heroA.name > heroB.name ? 1 : -1

  const searchByName = (hero: IHero) => {
    if (hasSearch) {
      const nameNormallized = hero.name.toUpperCase()
      const searchNormallized = String(search).toUpperCase()
      return nameNormallized.startsWith(searchNormallized)
    }

    return true
  }

  const getHeroesVisible = () => {
    const heroesVisible = favoriteHeroesIsVisible ? favoriteHeroes : heroes

    const heroesFormatted = heroesVisible
      .map(setIsFavorite)
      .filter(searchByName)

    if (hasSort) {
      heroesFormatted.sort(sortByName)
    }

    setListHeroes(heroesFormatted)
  }

  useEffect(() => {
    getHeroesVisible()
  }, [favoriteHeroesIsVisible, favoriteHeroes, heroes, isOrderByName])

  return {
    listHeroes,
  }
}

export default useHeroesVisible
