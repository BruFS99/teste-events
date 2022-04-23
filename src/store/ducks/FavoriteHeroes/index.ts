import { IHero } from 'services/Hero'

import FavoriteHeroesTypes from './types'
import { IActionAddFavoriteHero } from './actions'

export interface IFavoriteHeroes {
  favorites: IHero[]
}

const INITIAL_STATE = {
  favorites: [],
}

const reducer = (state = INITIAL_STATE, action: IActionAddFavoriteHero) => {
  switch (action.type) {
    case FavoriteHeroesTypes.ADD_FAVORITE_HERO:
      const hero = action.payload
      const { favorites } = state

      const newFavorites = [...favorites, hero]

      return { favorites: newFavorites }

    default:
      return state
  }
}

export default reducer
