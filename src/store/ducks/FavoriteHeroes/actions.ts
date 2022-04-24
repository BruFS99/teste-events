import { IHero } from 'services/Hero'
import Types from './types'

export interface IActionAddFavoriteHero {
  type: string
  payload: IHero
}

export interface IActionRemoveFavoriteHero {
  type: string
  payload: number
}

export const addFavoriteHero = (hero: IHero) => ({
  type: Types.ADD_FAVORITE_HERO,
  payload: hero,
})

export const removeFavoriteHero = (id: number) => ({
  type: Types.REMOVE_FAVORITE_HERO,
  payload: id,
})
