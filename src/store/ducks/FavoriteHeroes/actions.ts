import { IHero } from 'services/Hero'
import Types from './types'

export interface IActionAddFavoriteHero {
  type: string
  payload: IHero
}

export const addFavoriteHero = (hero: IHero) => ({
  type: Types.ADD_FAVORITE_HERO,
  payload: hero,
})
