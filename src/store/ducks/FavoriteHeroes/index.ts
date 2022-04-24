import { IHero } from 'services/Hero'

import FavoriteHeroesTypes from './types'
import { IActionAddFavoriteHero, IActionRemoveFavoriteHero } from './actions'

type IAction = IActionAddFavoriteHero | IActionRemoveFavoriteHero
export interface IFavoriteHeroes {
  favorites: IHero[]
}

const INITIAL_STATE = {
  favorites: [],
}

const reducer = (state = INITIAL_STATE, action: IAction) => {
  switch (action.type) {
    case FavoriteHeroesTypes.ADD_FAVORITE_HERO: {
      const hero = action.payload
      const { favorites } = state

      const newFavorites = [...favorites, hero]

      return { favorites: newFavorites }
    }

    case FavoriteHeroesTypes.REMOVE_FAVORITE_HERO: {
      const id = action.payload
      const { favorites } = state

      const newFavorites = favorites.filter((value: IHero) => value.id !== id)

      return { favorites: newFavorites }
    }

    default:
      return state
  }
}

export default reducer
